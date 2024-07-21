import { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './TopMostNav.css';
import { useNavigate, useLocation } from "react-router-dom";

const SubNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isPersonal, setPersonal] = useState(false);

    useEffect(() => {
        setPersonal(location.pathname.includes('personal'));
        console.log('Includes Personal: ', isPersonal);
    }, []);

    // document.addEventListener("click", function (event) {
    //     var navbar = document.querySelector("nav div.container-fluid div#navbar");
    //     var _opened = navbar.classList.contains("show");
    //     if (_opened === true) {
    //         navbar.classList.remove('show');
    //         navbar.classList.add('hide');
    //     }
    // });

    return (
        <nav id="top-most-nav-root" className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-collapse collapse" id="top-most-navbar">
                    <ul className="navbar-nav mb-lg-0 justify-content-lg-end" style={{ width: "100%" }}>
                        <li className={isPersonal && 'white-highlight' } onClick={() => navigate("personal/home")}> Personal </li>
                        <li onClick={() => navigate("personal/enquiry")}> Business </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default SubNav;