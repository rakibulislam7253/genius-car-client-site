import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sheard/footer/Footer';
import Header from '../pages/sheard/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;