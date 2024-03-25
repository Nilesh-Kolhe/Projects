import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import './NavBar.css';
import image from './Spotify_Logo_CMYK_Green.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { left } from '@popperjs/core';

const NavBar = () => {
    const baseUrl = "https://nilesh-kolhe.github.io/My/#";
    const [current, setCurrent] = useState("home");
    const { profile } = useSelector(state => state);

    const navigate = useNavigate();

    document.addEventListener("click", function (event) {
        var navbar = document.querySelector("nav div.container-fluid div#navbar");
        var _opened = navbar.classList.contains("show");
        if (_opened === true) {
            navbar.classList.remove('show');
            navbar.classList.add('hide');
        }
    });

    return (
        // <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-black" onClick={() => setCurrent("home")} href={`${baseUrl}/home`}>
                    <img src={`${image}`} alt="Logo" />
                </a><span style={{ color: "#FFF", paddingTop: "5px" }}>|&nbsp;&nbsp;</span>
                <h5 style={{ paddingTop: "16px", color: "#FFF" }}>Dashboard</h5>
                <button className="navbar-toggler collapsed"
                    style={{ backgroundColor: "#fff" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls="navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="navbar-nav mb-lg-0 justify-content-lg-end" style={{ width: "100%" }}>
                        <li className="nav-item" style={{ backgroundColor: '#FFF', borderRadius: 5, color: '#000' }}>
                            {/* <a className="nav-link" style={{ color: "white" }} onClick={() => setCurrent("home")} aria-current="page" href={`${baseUrl}/home`}> */}
                            <a className="nav-link" style={{ color: "white", display: "flex" }} onClick={() => navigate("/profile")} aria-current="page">
                                <img src={profile.picture} alt="Profile"
                                    style={{
                                        borderRadius: 30,
                                        width: 40,
                                        height: 40,
                                        border: "solid 0.5px",
                                    }} />
                                <div style={{ marginLeft: '5px', color: '#000' }}>
                                    <p style={{ fontWeight: 600, marginBottom: 0, marginTop: 2, fontSize: 'small' }}>{profile.displayName}</p>
                                    <p style={{ fontWeight: 100, marginBottom: 0, marginTop: -5, fontSize: 'x-small' }}>{profile.product}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // </div>
    );
}

export default NavBar;