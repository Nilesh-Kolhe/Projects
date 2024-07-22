import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './TopNav.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bank from './sbi.jpg';

const TopNav = () => {
    const navigate = useNavigate();
    // document.addEventListener("click", function (event) {
    //     var navbar = document.querySelector("nav div.container-fluid div#navbar");
    //     var _opened = navbar.classList.contains("show");
    //     if (_opened === true) {
    //         navbar.classList.remove('show');
    //         navbar.classList.add('hide');
    //     }
    // });

    return (
        <nav id="top-nav-root" className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <h5 style={{ paddingTop: "10px", color: "#000" }}>
                    {/* <img id="bank-logo" src={bank} /> */}
                </h5><span style={{ color: "#000", paddingTop: "12px" }}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <h5 style={{ fontWeight: 100, fontSize: 'medium', paddingTop: "22px", color: "#000" }}>Frontiernext Solutions Private Limited</h5>
                <div className="navbar-collapse collapse" id="top-navbar">
                    <ul className="navbar-nav mb-lg-0 justify-content-lg-end" style={{ width: "100%" }}>
                        <li onClick={() => navigate("personal/home")}> Home </li>
                        <li onClick={() => navigate("personal/enquiry")}> Enquiry </li>
                        <li onClick={() => navigate("personal/docs")}> Docs </li>
                        <li onClick={() => navigate("personal/track")}> Track </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;