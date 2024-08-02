import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px', height: '200px', backgroundColor: 'lightgray' }}>
            <a className="navbar-brand" style={{ fontWeight: 100, fontSize: 'medium', paddingTop: "7px", color: "#000" }}>Frontiernext logo</a>
            <h5 id="brand-name" style={{}}>Frontiernext Solutions Private Limited</h5>
            <span style={{ opacity: '60%', fontSize: 'medium', paddingBottom: '5px' }}>Office No. 101 TO 104, First Floor, Vikram Goldmine, OFF. F C Road, Pune 411004</span>
            <div style={{ display: 'flex', columnGap: '15px' }}>
                <a className='footer-link' href='https://www.instagram.com' target="_blank"><i class="bi bi-instagram"></i></a>
                <a className='footer-link' href='https://www.facebook.com' target="_blank"><i class="bi bi-facebook"></i></a>
                <a className='footer-link' href='https://www.twitter.com' target="_blank"><i class="bi bi-twitter-x"></i></a>
                <a className='footer-link' href='https://www.linkedin.com' target="_blank"><i class="bi bi-linkedin"></i></a>
            </div>
            <p>copyright <span>&#169;</span>2024</p>
        </div>
    );
};

export default Footer;