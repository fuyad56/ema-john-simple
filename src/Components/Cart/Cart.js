import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce( (total, product) => total + product, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 15) {
        shipping = 4.99;
    }else if (total > 35) {
        shipping = 0;
    }

    let tax =(total / 10);
    const amount = total + shipping + tax;

    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <div className='cart-container-text'>
            <h1>this is cart</h1>
            <p>Items ordered: {cart.length}</p>
            <p>Product price; {formateNumber(total)}</p>
            <p><small>Shipping cost: {formateNumber(shipping)}</small></p>
            <p><small>Tax + Vat: ${formateNumber(tax)}</small></p>
            <p>Total price: ${formateNumber(amount)}</p>
            <button className='bg-warning'>
                <FontAwesomeIcon icon={faShoppingCart} /> Review order
                    </button>
        </div>
    );
};

export default Cart;