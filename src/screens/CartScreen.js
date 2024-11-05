import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { BASE_URL } from '../config';
import Loader from '../components/Loader';
import { PiCurrencyInr } from "react-icons/pi";
import './CartScreen.css';

function CartScreen() {
    const { id: productId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (productId) {
            setLoading(true)
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        setLoading(false)
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        navigate('/shipping');
    };

    return (
        <div className="cart-screen">
            <div className="cart-items">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <h3>
                        {loading ? <Loader/> :  <Link className='link' to="/">Your cart is empty add item</Link>}
                    </h3>
                ) : (
                    cartItems.map(item => (
                        <div key={item.product} className="cart-item">
                            <Link to={`/product/${item.product}`}>
                                <img
                                    src={`${BASE_URL}${item.image}`}
                                    alt={item.name}
                                    className="cart-image"
                                />
                            </Link>
                            <Link to={`/product/${item.product}`} className="cart-item-name">
                                {item.name}
                            </Link>
                            <div className="cart-item-price">₹ {item.price}</div>
                            <select
                                value={item.qty}
                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                className="cart-item-select"
                            >
                                {[...Array(item.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </select>
                            <button
                                className="cart-item-remove"
                                onClick={() => removeFromCartHandler(item.product)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="fixed-bottom-button">
                    <div className="button-container">
                        <button className="button2">
                            <span><PiCurrencyInr /></span>{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </button>
                        <button onClick={checkoutHandler} className="button3">
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartScreen;

