import React from 'react';
import './Header.css'
import Logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="header-text">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/inventory">Manage inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;