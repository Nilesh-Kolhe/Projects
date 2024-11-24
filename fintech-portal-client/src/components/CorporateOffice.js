import React from 'react';

const CorporateOffice = () => {
    return (
        <div className='footer-sub-section'>
            <p className='footer-heading'> Corporate Office</p>
            <p>
                The Capital, Level 7, B-Wing, Plot C – 70, G Block, Bandra Kurla Complex, Bandra (East), Mumbai – 400051.
            </p>
            <p>
                <i className='bi bi-envelope' style={{ paddingRight: '8px' }}></i>
                <label> Mumbai@terkarcapital.com </label>
            </p>
            <p>
                <i className='bi bi-telephone' style={{ paddingRight: '8px' }}></i>
                <label>+91 7414973455</label>
            </p>
        </div>
    );
};

export default CorporateOffice;