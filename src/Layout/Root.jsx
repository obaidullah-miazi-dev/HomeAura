import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import About from '../Pages/About';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Root;