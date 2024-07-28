import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './TopNav.css';
import { useNavigate, useLocation } from "react-router-dom";

const TopNav = () => {

    const navigate = useNavigate();
    // const location = useLocation();
    // const route = location.pathname;
    const route = window.location.href.split('/')[3];
    console.log('Route: ', route);

    document.addEventListener("click", (event) => {
        var navbar = document.querySelector("nav div.container-fluid div#top-navbar");
        var _opened = navbar.classList.contains("show");
        if (_opened === true) {
            navbar.classList.toggle('show');
        }
    });

    return (
        <nav id="top-nav-root" className="navbar navbar-expand-md navbar-light bg-light" aria-label="top navbar">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ fontWeight: 100, fontSize: 'medium', paddingTop: "7px", color: "#000" }}>Frontiernext</a>
                <span id="separator" style={{ color: "#000" }}>|&nbsp;&nbsp;</span>
                <h5 style={{ fontWeight: 100, fontSize: 'medium', paddingTop: "10px", paddingLeft: "5px", color: "#000" }}>Frontiernext Solutions Private Limited</h5>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#top-navbar" aria-controls="top-navbar" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="top-navbar" className="navbar-collapse collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 justify-content-sm-end" style={{ width: "100%" }}>
                        <li className={!route.includes('#') ? 'nav-item current' : 'nav-item'} onClick={() => navigate("landing")}> <a href='#home'>Home</a> </li>
                        <li className='nav-item' onClick={() => { }}> Services </li>
                        <li className={route.includes('partners') ? 'nav-item current' : 'nav-item'} onClick={() => navigate("landing")} > <a href='#partners'> Partners </a> </li>
                        <li className={route.includes('enquiry') ? 'nav-item current' : 'nav-item'} onClick={() => navigate("enquiry")}> Enquiry </li>
                        <li className='nav-item' onClick={() => { }}> About Us </li>
                        <li className='nav-item' onClick={() => navigate("landing")}> <a href='#track'> Track </a> </li>

                        {/* <li className={route.includes('home') === true ? 'nav-item current' : 'nav-item'} onClick={() => {}}> Home </li>
                        <li className={route.includes('services') === true ? 'nav-item current' : 'nav-item'} onClick={() => {}}> Services </li>
                        <li className={route.includes('partners') === true ? 'nav-item current' : 'nav-item'} onClick={() => {}}> Partners </li>
                        <li className={route.includes('enquiry') ? 'nav-item current' : 'nav-item'} onClick={() => {}}> Enquiry </li>
                        <li className={route.includes('about') ? 'nav-item current' : 'nav-item'} onClick={() => {}}> About Us </li>
                        <li className={route.includes('track') ? 'nav-item current' : 'nav-item'} onClick={() => {}}> Track </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;