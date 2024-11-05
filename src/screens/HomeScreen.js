import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';
import { Products } from '../components/Products';

function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { error, loading, products } = productList;

    useEffect(() => {
        const cachedProducts = JSON.parse(localStorage.getItem('products'));

        if (!cachedProducts || cachedProducts.length !== products.length) {
            dispatch(listProducts());
        } else {
            dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: cachedProducts });
        }
    }, [dispatch, products.length]);

    useEffect(() => {
        if (products.length) {
            localStorage.setItem('products', JSON.stringify(products));
        }
    }, [products]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <div>
                    <Row>
                        {Array.isArray(products) && products.length > 0 ? (
                            products.map((product) => (
                                <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={3} className="my-1">
                                    <Products contents={product} />
                                </Col>
                            ))
                        ) : (
                            <Message variant="info">No products found</Message>
                        )}
                    </Row>
                </div>
            )}
        </div>
    );
}

export default HomeScreen;
