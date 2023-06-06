import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className="error-text">
            <div className='error-container'>
                <h1>Page not found...</h1>
                <h5>Error code 404!!!</h5>
            </div>
        </div>
    );
};

export default Error;