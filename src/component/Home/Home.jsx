import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-slate-300'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;