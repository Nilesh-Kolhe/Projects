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
                {/* <div style={{ padding: '20px 40px', opacity: '90%' }}>
                    <h1 style={{ marginBottom: '25px' }}>Our Team</h1>
                    <div id='team-container'>
                        <div className='profile-card'>
                            <img className='profile-pic' src={ProfilePic} />
                            <span style={{ fontWeight: '700', fontSize: 'larger' }}>Ketan</span>
                            <span className='designation'>Founder</span>
                            <p style={{ textAlign: 'center' }}>
                                Ketan co-founded Finance Buddha in 2012 after having more than a decade entrepreneurial experience in financial services, telecom and manufacturing. In 2012 he discontinued other ventures to focus on financial services. He currently manages the unsecured business.
                            </p>
                        </div>
                        <div className='profile-card'>
                            <img className='profile-pic' src={ProfilePic} />
                            <span style={{ fontWeight: '700', fontSize: 'larger' }}>Mohan</span>
                            <span className='designation'>Co-Founder</span>
                            <p style={{ textAlign: 'center' }}>
                                After spending 8 years at Citibank he co-founded Finance Buddha in 2012 along with Ketan. At Citibank, he had set up the most profitable retail asset franchise within the bank, accounting for over 45% of the country's volumes in personal loans. At Finance Buddha he manages mortgage business and is responsible for overall marketing initiatives.
                            </p>
                        </div>
                        <div className='profile-card'>
                            <img className='profile-pic' src={ProfilePic} />
                            <span style={{ fontWeight: '700', fontSize: 'larger' }}>Shrijith</span>
                            <span className='designation'>Co-Founder</span>
                            <p style={{ textAlign: 'center' }}>
                                Shrijith has 10 years experience in investment management roles in India and South East Asian countries. Before joining Finance Buddha in 2013 he was Vice President - Investments at Masan Group in Vietnam. Masan is the largest private sector conglomerate in Vietnam with a market cap in excess of USD 3.5 billion and having interests across FMCG, Banking, Mining etc.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;