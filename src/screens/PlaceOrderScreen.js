import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import Spinner from 'react-bootstrap/Spinner';
import { BASE_URL } from '../config'
import './placeOrderScreen.css'

function PlaceOrderScreen() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const userInfo = useSelector(state => state.userLogin.userInfo)
    const { shippingAddress } = cart
    
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)
    cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    if (!userInfo) {
        navigate('/login')
    }

    if (!shippingAddress.address) {
        navigate('/shipping')
    }

    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
        if (error) {
            setLoading(false)
        }
    }, [success, navigate, dispatch, order, error])

    const placeOrder = () => {
        setLoading(true)
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }

    return (
        <div className="place-order-container">
            <CheckoutSteps step1 step2 step3 />
            <div className="order-row">
                <div className="order-col">
                    <div className="order-section">
                        <h2 className='h2'>Shipping</h2>
                        <p>
                            <strong>Address: </strong>
                            {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                            {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                        </p>
                    </div>

                    <div className="order-section">
                        <h2 className='h2'>Order Items</h2>
                        {cart.cartItems.length === 0 ? (
                            <Message variant='info'>Your cart is empty</Message>
                        ) : (
                            <div >
                                {cart.cartItems.map((item, index) => (
                                    <div key={index} className="item-row">
                                        <Link to={`/product/${item.product}`}>
                                            <img src={`${BASE_URL}${item.image}`} alt={item.name} className="item-image" />
                                        </Link>
                                        <div className="item-details">
                                            <Link className='link' to={`/product/${item.product}`}>{item.name}</Link>
                                            <p className="item-price">
                                                {item.qty} X ₹{item.price} = ₹{(item.qty * item.price).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="order-summary-card">
                    <h2 className='h2'>Order Summary</h2>
                    <div className="summary-item"><span>Items:</span><span>₹{cart.itemsPrice}</span></div>
                    <div className="summary-item"><span>Shipping:</span><span>₹{cart.shippingPrice}</span></div>
                    <div className="summary-item"><span>Tax:</span><span>₹{cart.taxPrice}</span></div>
                    <div className="summary-item total"><span>Total:</span><span>₹{cart.totalPrice}</span></div>

                    {error && <Message variant='danger'>{error}</Message>}
                </div>
            </div>

            <button
                type='button'
                className='button4'
                disabled={cart.cartItems === 0}
                onClick={placeOrder}
            >
                {loading ? (<><Spinner animation="border" /> Loading... </>) : ('Place Order')  }
            </button>
        </div>
    )
}

export default PlaceOrderScreen

