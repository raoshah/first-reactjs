import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails, payOrder, deliverOrder } from '../actions/orderActions';
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../constants/orderConstants';
import Spinner from 'react-bootstrap/Spinner';
import { BASE_URL } from '../config';
import axios from 'axios';
import './placeOrderScreen.css';

function OrderScreen() {
    const { id: orderId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [sdkReady, setSdkReady] = useState(false);
    const [loading, setLoading] = useState(false);

    const orderDetails = useSelector(state => state.orderDetails);
    const { order, error, loading: loadingOrder } = orderDetails;

    const orderPay = useSelector(state => state.orderPay);
    const { loading: loadingPay, success: successPay } = orderPay;

    const orderDeliver = useSelector(state => state.orderDeliver);
    const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    if (!loadingOrder && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
    }

    const addPayPalScript = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.paypal.com/sdk/js?client-id=AeDXja18CkwFUkL-HQPySbzZsiTrN52cG13mf9Yz7KiV2vNnGfTDP0wDEN9sGlhZHrbb_USawcJzVDgn';
        script.async = true;
        script.onload = () => setSdkReady(true);
        document.body.appendChild(script);
    };

    useEffect(() => {
        if (!userInfo) navigate('/login');

        if (!order || successPay || order._id !== Number(orderId) || successDeliver) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch({ type: ORDER_DELIVER_RESET });
            dispatch(getOrderDetails(orderId));
        } else if (!order.isPaid && !window.paypal) {
            addPayPalScript();
        }
    }, [dispatch, order, orderId, successPay, successDeliver, userInfo, navigate]);

    const token = useSelector(state => state.userLogin.userInfo.access);

    const successPaymentHandler = async (paymentResult) => {
        setLoading(true);
        dispatch(payOrder(orderId, paymentResult));

        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        };

        try {
            const response = await axios.post(`${BASE_URL}/orderpay/`, { order_id: orderId, total: order.totalPrice }, config);
            if (response.data.success) {
                window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
            } else {
                setLoading(false);
                alert('Payment initiation failed');
            }
        } catch (error) {
            setLoading(false);
            console.error('Payment initiation error:', error);
            alert('Payment failed');
        }
    };

    const deliverHandler = () => dispatch(deliverOrder(order._id));

    return loadingOrder ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <div className="place-order-container">
            <h1 className="h2"><strong>Order:</strong> {order._id}</h1>
            <div className="order-row">
                <div className="order-col">
                    <div className="order-section">
                        <h2 className="h2">Shipping Details</h2>
                        <p><strong>Name: </strong>{order.user.name}</p>
                        <p><strong>Number: </strong>{order.user.email}</p>
                        <p><strong>Address: </strong>{order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
                        <p> .</p>
                        {order.isDelivered ? (
                            <Message variant="success">Delivered on {order.deliveredAt}</Message>
                        ) : (
                            <Message variant="warning">Not Delivered</Message>
                        )}
                    </div>

                    <div className="order-section">
                        <h2 className="h2">Order Items</h2>
                        {order.orderItems.length === 0 ? (
                            <Message variant="info">Order is empty</Message>
                        ) : (
                            <div className="order-items">
                                {order.orderItems.map((item, index) => (
                                    <div key={index} className="item-row">
                                        <img src={`${BASE_URL}${item.image}`} alt={item.name} className="item-image" />
                                        <div className="item-details">
                                            <Link to={`/product/${item.product}`}  className="link">{item.name}</Link>
                                        </div>
                                        <div className="item-price">
                                            {item.qty} X ₹{item.price} = ₹{(item.qty * item.price).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="order-summary-card">
                    <h2 className="order-summary-title">Order Summary</h2>
                    <div className="summary-item">
                        <span>Items</span>
                        <span>₹{order.itemsPrice}</span>
                    </div>
                    <div className="summary-item">
                        <span>Shipping</span>
                        <span>₹{order.shippingPrice}</span>
                    </div>
                    <div className="summary-item">
                        <span>Tax</span>
                        <span>₹{order.taxPrice}</span>
                    </div>
                    <div className="summary-item total">
                        <span>Total</span>
                        <span>₹{order.totalPrice}</span>
                    </div>
                    <div className="summary-item">
                        {order.isPaid ? (
                            <Message variant="success">Paid on {order.paidAt}</Message>
                        ) : (
                            <button className="button4" onClick={successPaymentHandler} disabled={loading}>
                                {loading ? (<><Spinner animation="border" /> Loading... </>) : ('Pay Now')}
                            </button>
                        )}
                    </div>

                    {loadingDeliver && <Loader />}
                    {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                        <div className="summary-item">
                            <button className="button4" onClick={deliverHandler}>
                                Mark As Delivered
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OrderScreen;
