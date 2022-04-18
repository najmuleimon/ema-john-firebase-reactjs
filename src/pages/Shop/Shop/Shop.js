import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop container'>
            <div className="row">
                <Link to="/checkout" element={<Checkout/>}>checkout</Link>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;