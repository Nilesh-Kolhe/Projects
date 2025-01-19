import React, { useRef, useState, useEffect } from 'react';
import card from './images/gr-hand.PNG';
import ProfilePic from './images/Syeed-Haseeb.jpg';
import './About.css';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";

const AboutUs = () => {
    const refContainer = useRef(null);
    useEffect(() => refContainer.current.scrollIntoView({ behavior: "instant" }), []);
    return (
        <>
            <div id='about-container' ref={refContainer}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, backgroundImage: `url(${card})`, zIndex: '-1', backgroundSize: '1375px 610px' }}>
                </div>
                <div style={{ padding: '15px 50px', backgroundColor: 'lightgrey', margin: '14px' }}>
                    <h1 style={{ marginBottom: '25px' }}>Who we are !</h1>
                    <p className='info-para'>
                        The dynamic journey of Frontiernext is hinged on one simple philosophy that everyone deserves to live their lives to their fullest potential.
                    </p>
                    <p className='info-para'>
                        The seed that was sown way back in 2005 by three passionate individuals from the banking sector has reaped numerous milestones as we walk through the journey of making transformative impact in the lives of people. Yet, the most valuable asset we’ve reaped is the unwavering faith of our customers borne from our credibility to help them make responsible decisions about their finance.
                    </p>
                    <p className='info-para'>
                        Over the years our services have enhanced, we have evolved and our business has grown. But what has remained as solid as a rock is our core philosophy of making loans accessible to people from all walks of life. 1000 fulfilled dreams across the country and crores of loans later, we give ourselves a pat on the back knowing someone, somewhere is living a life of their dreams with the support of Frontiernext.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;