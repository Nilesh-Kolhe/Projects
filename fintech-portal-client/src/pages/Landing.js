import React from 'react';
import './Home.css';
import Home from './Home';
import Partners from './Partners';
import About from './About';
import Track from './Track';
import Footer from '../components/Footer';

const Landing = () => {
    console.log('Landing');
    return (
        <>
            <Home />
            <Partners />
            <About />
            <Track />
            <Footer />
        </>
    );
};

export default Landing;