import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({ product }) {
    return (
        
            <Card className="h-100 ">
                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card.Img src={product.image} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} />
                </Link>

                <Card.Body className="d-flex flex-column">
                    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card.Title as="div">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>

                    <Card.Text>
                       
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    
                    </Card.Text>

                    <Card.Text as="h3">
                        ₹ {product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
      
    );
}

export default Product;
