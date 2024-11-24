import React from 'react';
import './Footer.css';

const HeadOffice = () => {
    return (
        <div id='footer-container' >
            <div className='footer-sub-section'>
                <p className='footer-heading'> Head Office </p>
                <p>
                    Castle Eleganza, 103, Bhonde Colony, Dr.Ketkar Road, Erandwane, Pune – 411004, MH-India
                </p>
                <p>
                    <i className='bi bi-envelope' style={{ paddingRight: '8px' }}></i>
                    <label>
                        Yes@terkarcapital.com
                    </label>
                </p>
                <p>
                    <i className='bi bi-telephone' style={{ paddingRight: '8px' }}></i>
                    <label>+91 8308629820</label>
                </p>
            </div>
        </div>
    );
};

export default HeadOffice;