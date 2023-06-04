import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10)

    // Cart Details
    const [cart, setCart] = useState([]);

    // Event Handler
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div>
            <div className="shop-container-1">
                <div className="shop-container-text">
                    {
                        products.map(product => <Product addToCart = {handleAddToCart} product= {product} key={product.key}></Product>)
                    }
                </div>
                <div className="shop-container-2">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;