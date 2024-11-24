import React from 'react';
import './Home.css';
import Home from './Home';
import Partners from './Partners';
import About from './About';
import Footer from '../components/Footer';

const Landing = () => {
    console.log('Landing');
    return (
        <>
            <Home />
            <About />
            <Partners />
            <Footer />
        </>
    );
};

export default Landing;