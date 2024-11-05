import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetails, createProductReview } from '../actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';
import { BASE_URL } from '../config';
import './productsScreen.css';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from 'react-icons/fa';

function ProductScreen() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate;

    useEffect(() => {
        if (successProductReview) {
            setRating(0);
            setComment('');
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
        }
        dispatch(listProductDetails(id));
    }, [dispatch, id, successProductReview]);

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createProductReview(id, {
                rating,
                comment,
            })
        );
    };

    return (
        <>
            <div className="product-container">
                <div className="single-product-main-content">
                    <div className="layout">
                        <div className="single-product-page">
                            <div className="left">
                                <img src={`${BASE_URL}${product.image}`} alt={product.name} />
                            </div>
                            <div className="right">
                                <span className="desc">{product.name}</span>
                                <span className="desc">{product.description}</span>
                                <span className="price">Price ₹{product.price}</span>


                                <div className="cart-buttons">
                                    {product.countInStock > 0 ? (
                                        <>
                                            <div className="quantity-buttons">
                                                <span onClick={() => setQty(qty > 1 ? qty - 1 : qty)}>-</span>
                                                <span>{qty}</span>
                                                <span onClick={() => setQty(qty + 1)}>+</span>
                                            </div>

                                            <button className="add-to-cart-button" onClick={addToCartHandler}>
                                                <FaCartPlus size={20} />
                                                ADD TO CART
                                            </button>
                                        </>
                                    ) : (
                                        <span className="out-of-stock">Out of Stock</span>
                                    )}
                                </div>


                                <div className="info-item">


                                    <span className="text-bold">Share
                                        <span className="Social-icons">
                                            <FaFacebookF size={16} />
                                            <FaTwitter size={16} />
                                            <FaInstagram size={16} />
                                            <FaLinkedinIn size={16} />
                                            <FaPinterest size={16} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <div className="reviews-container">
                    <div className="product-rating">
                        <Rating value={product.rating} color="#f8e825" />
                        <span>{product.numReviews} Reviews</span>
                    </div>
                    {product.reviews.length === 0 && <Message variant="info">No Reviews</Message>}
                    <div className="reviews-list">
                        {product.reviews.map((review) => (
                            <div key={review._id} className="review-item">
                                <strong>{review.name}</strong>
                                <Rating value={review.rating} color="#f8e825" />
                                <span className="review-date">{review.createdAt.substring(0, 10)}</span>
                                <p className="review-comment">{review.comment}</p>
                            </div>
                        ))}
                    </div>

                    <div className="review-form">
                        <h4>Write a Review</h4>
                        {loadingProductReview && <Loader />}
                        {successProductReview && <Message variant="success">Review Submitted</Message>}
                        {errorProductReview && <Message variant="danger">{errorProductReview}</Message>}
                        {userInfo ? (
                            <form onSubmit={submitHandler} className="review-submit-form">
                                <div className="form-group">
                                    <label htmlFor="rating">Rating</label>
                                    <select
                                        id="rating"
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                        className="form-control"
                                    >
                                        <option value="">Select...</option>
                                        <option value="1">1 - Poor</option>
                                        <option value="2">2 - Fair</option>
                                        <option value="3">3 - Good</option>
                                        <option value="4">4 - Very Good</option>
                                        <option value="5">5 - Excellent</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">Review</label>
                                    <textarea
                                        id="comment"
                                        rows="5"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        className="form-control"
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button" disabled={loadingProductReview}>
                                    Submit
                                </button>
                            </form>
                        ) : (
                            <Message variant="info">
                                Please <Link to="/login">login</Link> to write a review
                            </Message>
                        )}
                    </div>
                </div>
            )}

        </>
    );
}

export default ProductScreen;
