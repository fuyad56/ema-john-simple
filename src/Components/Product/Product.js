import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, stock, price } = props.product;
    const handleAddToCart = props.addToCart;
    
    return (
        <div className='product-container'>
            <div className="product-container-img">
                <img src={img} alt="" />
            </div>
            <div className="product-container-text">
                <h5>{name}</h5>
                <p>
                    <small>By: {seller}</small>
                </p>
                <p>{price}</p>
                <p>
                    <small>Only {stock} left in stock-Order soon</small>
                </p>
                <button onClick={ () => handleAddToCart(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;