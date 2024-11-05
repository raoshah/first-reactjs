import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Table, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails, updateUserProfile, logout } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './ProfileScreen.css'

function ProfileScreen() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isEditing, setIsEditing] = useState(() => {
        // Check if user was editing when they last visited
        const savedState = localStorage.getItem('isEditing');
        return savedState ? JSON.parse(savedState) : false; // Use saved state or false
    })

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !user.name || success || userInfo._id !== user._id) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, userInfo, user, success])

    // Save edit state to local storage
    useEffect(() => {
        localStorage.setItem('isEditing', JSON.stringify(isEditing))
    }, [isEditing])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'id': user._id,
                'name': name,
                'email': email,
                'password': password
            }))
            setMessage('')
            setIsEditing(false) // Exit edit mode on successful update
        }
    }

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <Container fluid="sm" className="profile-container">
            <Row>
                <Col md={3} className="user-section">
                    <h2>User Profile</h2>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loader />}

                    {/* If editing is true, show input fields for editing, otherwise show user details */}
                    {!isEditing ? (
                        <>
                            <p><strong>Name:</strong> {name}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <Button onClick={() => setIsEditing(true)} variant='primary' className="w-100 mt-3">
                                Edit Profile
                            </Button>
                        </>
                    ) : (
                        <Form onSubmit={submitHandler} className="profile-form">
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input-field"
                                />
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input-field"
                                />
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input-field"
                                />
                            </Form.Group>

                            <Form.Group controlId='passwordConfirm'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="input-field"
                                />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Button type='submit' variant='primary' className="w-100 mt-3">
                                        Save Changes
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        variant='secondary'
                                        onClick={() => setIsEditing(false)} // Cancel edit mode
                                        className="w-100 mt-3"
                                    >
                                        Cancel Edit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )}

                    {/* Logout Button */}
                    <Button
                        className="btn-logout mt-4 w-100"
                        variant='danger'
                        onClick={logoutHandler}
                    >
                        Logout
                    </Button>
                </Col>





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


            </Row>
        </Container>
    )
}

export default ProfileScreen
