import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='backdrop-brightness-50 backdrop-blur-3xl px-40 py-6 mb-4 sticky top-0 z-50'>
            <ul className='text-3xl text-white font-semibold flex justify-around'>
                <Link to='/'>Home</Link>
                <Link to='/countries'>Countries</Link>
                <Link>About Us</Link>
            </ul>
        </nav>
    );
};

export default Header;