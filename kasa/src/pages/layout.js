import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer'
import './layout.scss'

const Layout = () => {
    return (
        <div className='layout'>

            <Header />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Layout;