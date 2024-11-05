import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { login } from '../actions/userActions';
import './ShippingScreen.css'

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const redirect = '/';

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
    
            <div>
                <h1 className="heading text-center">Sign In</h1>
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                
                <form onSubmit={submitHandler} className="form-content">
                    <div className="form-group">
                        <label htmlFor="email">Phone Number</label>
                        <input
                            type="tel"
                            id="email"
                            placeholder="Enter Phone Number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>

                    <button type="submit" className="button5">
                        Sign In
                    </button>
                </form>

                <div className="redirect-message text-center">
                    New Customer? <span className="register"><Link to="/register">Register</Link></span>
                </div>
            </div>
    );
}

export default LoginScreen;
