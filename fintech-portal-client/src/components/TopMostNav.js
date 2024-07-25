import { useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './TopMostNav.css';

const TopMostNav = () => {
    
    return (
            <nav id="top-most-nav-root" className="navbar navbar-expand-sm navbar-light" aria-label="top most navbar">
            <div className="container-fluid">
                <div className="navbar-collapse collapse" id="top-most-navbar">
                    <ul className="navbar-nav justify-content-sm-end" style={{ width: "100%" }}>
                        <li> contact us on ( +91 ) 91 11 11 1111  </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopMostNav;