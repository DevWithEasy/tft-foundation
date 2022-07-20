import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-blue-50 p-2 space-y-2'>
            <div className='bg-white p-2 rounded'>
            <p className='space-x-2'>
                <Link to='/about' className='text-blue-500'>About us</Link>
                <span>/</span>
                <Link to='/privacy' className='text-blue-500'>Privacy policy</Link>
                <span>/</span>
                <Link to='/faq' className='text-blue-500'>FAQ's</Link>
                <span>/</span>
                <Link to='/connect' className='text-blue-500'>Connect us</Link> 
            </p>
            <p className='text-center space-x-2'>
                <span>Developed and Copyright by:</span> 
                <Link to='/profile/umoaOAd65fUseJEeY2IDgRJqWU42' className='text-blue-500'>DevWithEasy</Link>
            </p>
            </div>
        </div>
    );
};

export default Footer;