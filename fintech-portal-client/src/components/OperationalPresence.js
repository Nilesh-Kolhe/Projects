import React from 'react';

const OperationalPresence = () => {
    return (
        <div className='footer-sub-section'>
            <p className='footer-heading'> Operational Presence</p>
            <p>
                Delhi | Bengaluru | Chennai | Kolkata | Ahmedabad | Surat
            </p>
            <div id='icons-container'>
                <a className='footer-link' href='https://www.linkedin.com' target="_blank"><i className='bi bi-linkedin'></i></a>
                <a className='footer-link' href='https://www.facebook.com' target="_blank"><i className='bi bi-facebook'></i></a>
                <a className='footer-link' href='https://www.twitter.com' target="_blank"><i className='bi bi-twitter-x'></i></a>
                <a className='footer-link' href='https://www.instagram.com' target="_blank"><i className='bi bi-instagram'></i></a>
            </div>
        </div>
    );
};

export default OperationalPresence;