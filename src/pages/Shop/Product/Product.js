import React from 'react';
import { Card } from 'react-bootstrap';
import {BsCart3} from 'react-icons/bs'
import './Product.css';

const Product = ({product}) => {
    const {name, price, img, category} = product;
    return (
        <div className='col-md-4'>
            <Card className='product-card'>
                <img src={img} alt="Product" />
                <Card.Body>
                    <h4>{name}</h4>
                    <h5>Category: {category}</h5>
                    <p>Price: ${price}</p>
                    <button>Add to Cart <BsCart3 className='ms-2'/> </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;