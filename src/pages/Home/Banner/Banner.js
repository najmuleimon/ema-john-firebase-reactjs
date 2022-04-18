import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner container'>
            <div className="row align-items-center">
                <div className="col-md-7">
                    <small>Sale up to 70% off</small>
                    <h1>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <Link to="/shop" className='shop-now'>Shop now</Link>
                </div>
                <div className="col-md-5">
                    <div className="img text-end">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;