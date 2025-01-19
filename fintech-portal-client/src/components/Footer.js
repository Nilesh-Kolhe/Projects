import React from 'react';
import './Footer.css';
import HeadOffice from './HeadOffice';
import CorporateOffice from './CorporateOffice';
import BrancheOffice from './BranchOffice';
import OperationalPresence from './OperationalPresence';

const Footer = () => {
    return (
        <div id='footer-container'>
            <div className='footer-sub-container'>
                <HeadOffice />
                <CorporateOffice />
                <BrancheOffice />
                <OperationalPresence />
            </div>
            {/* <a className="navbar-brand" style={{ fontWeight: 100, fontSize: 'medium', paddingTop: "7px", color: "#000" }}>Frontiernext logo</a>
            <h5 id="brand-name">Frontiernext Solutions Private Limited</h5>
            <span style={{ fontSize: 'medium', paddingBottom: '5px' }}>No. 184/A, Second Floor, First Main Road, Sharadha Colony, Basaveshwara Nagar, Bengaluru - 560079</span>
            <span style={{ fontSize: 'large', fontWeight: '500', paddingBottom: '5px' }}>Toll Free: (080) - 41273280</span>
            <div id='icons-container'>
                <a className='footer-link' href='https://www.instagram.com' target="_blank"><i class="bi bi-instagram"></i></a>
                <a className='footer-link' href='https://www.facebook.com' target="_blank"><i class="bi bi-facebook"></i></a>
                <a className='footer-link' href='https://www.twitter.com' target="_blank"><i class="bi bi-twitter-x"></i></a>
                <a className='footer-link' href='https://www.linkedin.com' target="_blank"><i class="bi bi-linkedin"></i></a>
            </div>  */}
            <div className='copyright'>
                <i className='bi bi-c-circle' style={{paddingTop: '3px'}}></i> &nbsp;Frontiernext Solutions Private Limited 2024
            </div>
        </div>
    );
};

export default Footer;