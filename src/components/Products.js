import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../config';
import { addToCart } from '../actions/cartActions'
import Rating from './Rating';
import { resetProductDetails } from '../actions/productActions';
import { PiCurrencyInr } from "react-icons/pi";
import './Products.css'

export function Products({ contents }) {

    const dispatch = useDispatch();

    const handleProductClick = () => {
        console.log("itenn ", cartItems)
        dispatch(resetProductDetails());
    };

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const cartItemIds = new Set(cartItems.map((item) => item.product));
    const isInCart = (productId) => cartItemIds.has(productId);

    const addCart = (id) => {
        dispatch(addToCart(id, 1))
    }
    return (
        <>
            <div className='cartMain'>

                <div className='productImg'>
                    <div key={contents._id} className='productCard'>
                        <Link to={`/product/${contents._id}`} style={{ textDecoration: 'none' }} onClick={handleProductClick} >
                            <img src={`${BASE_URL}${contents.image}`} alt='product-img' className='productImage'></img>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="button2"> <span><PiCurrencyInr /></span>{contents.price}</button>
                {contents.countInStock > 0 ?
                    (<> {isInCart(contents._id) ? (
                        <Link to={'/cart'} className='link' ><button className="button">Go to cart </button></Link>

                    ) : (

                        <div onClick={() => addCart(contents._id)} className="button">ADD TO CART</div>)}

                    </>
                    ) : (
                        <button className={"out-stock"}>Out of Stock</button>
                    )}

            </div>

            <Link to={`/product/${contents._id}`} className='name' onClick={handleProductClick} >
                <h3>{contents.name}</h3>
            </Link>
            <p className='review'>
                <span >
                    <Rating
                        value={contents.rating}
                        text={`${contents.numReviews}`}
                        color={'#f8e825'}
                    />
                </span>
                {contents.numReviews} Reviews
            </p>

        </>
    )
}