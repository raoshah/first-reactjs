import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Link, useNavigate } from 'react-router-dom';
import { listMyOrders } from '../actions/orderActions'
import './ProfileScreen.css'

function MyOrderScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    useEffect(() => {
      
                dispatch(listMyOrders())    
 
    }, [dispatch, navigate])
 
    return (
        <div className="orders-section">
            <h2>My Orders</h2>
            {loadingOrders ? (
                <Loader />
            ) : errorOrders ? (
                <Message variant="danger">{errorOrders}</Message>
            ) : orders.length === 0 ? (
                <div className="no-orders">
                    <p>You have no orders yet.</p>
                    <Link to="/" className="shop-link">Browse items in our shop</Link>
                </div>
            ) : (
                <div className="order-cards">
                    {orders.map((order) => (
                        <div key={order._id} className="order-card">
                            <div className="order-id">Order ID: {order._id}</div>
                            <div className="order-date">Date: {order.createdAt.substring(0, 10)}</div>
                            <div className="order-total">Total: ${order.totalPrice}</div>
                            <div className="order-paid">
                                Paid: {order.isPaid ? order.paidAt.substring(0, 10) : <i className='fas fa-times' style={{ color: 'red' }}></i>}
                            </div>
                            <div className="order-actions">
                                {order.isPaid ? (
                                    <Link to={`/order/${order._id}`} className="btn-details link">View Details</Link>
                                ) : (
                                    <Link to={`/order/${order._id}`} className="btn-pay-now link">Pay Now</Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyOrderScreen
