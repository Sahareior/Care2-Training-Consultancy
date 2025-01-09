import React from 'react';
import Navbar from '../Nevigation/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const BloglayOut = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet />
        
            
        </div>
    );
};

export default BloglayOut;