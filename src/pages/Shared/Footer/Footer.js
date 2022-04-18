import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='footer text-center bg-dark'>
            <p className='text-white'>All right reserved by Najmul &copy; {year}</p>
        </footer>
    );
};

export default Footer;