
import Footer from '../Footer/Footer';
import Navbar from '../Nevigation/Navbar';
import { Outlet } from 'react-router-dom';
import './layout.css'
import { useEffect } from 'react';
import ReactGA from 'react-ga';


const Layout = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <div className=''>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Layout;