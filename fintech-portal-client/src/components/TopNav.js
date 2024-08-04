import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './TopNav.css';
import { useNavigate } from "react-router-dom";

const TopNav = () => {

    const navigate = useNavigate();
    const route = window.location.href.split('/')[3];
    console.log('Route: ', route);

    // document.addEventListener("click", (event) => {
    //     var navbar = document.querySelector("nav div.container-fluid div#top-navbar");
    //     var _opened = navbar.classList.contains("show");
    //     if (_opened === true) {
    //         navbar.classList.toggle('show');
    //     }
    // });

    return (
        <nav id="top-nav-root" className="navbar navbar-expand-md navbar-light bg-light" aria-label="top navbar">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ fontWeight: 100, fontSize: 'medium', paddingTop: "7px", color: '#000' }}>Frontiernext</a>
                <span id="separator" style={{ color: "#000" }}>|&nbsp;&nbsp;</span>
                <h5 style={{ fontWeight: 100, fontSize: 'medium', paddingTop: "10px", paddingLeft: "5px", color: "#000" }}>Frontiernext Solutions Private Limited</h5>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#top-navbar" aria-controls="top-navbar" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="top-navbar" className="navbar-collapse collapse">
                    <ul className="navbar-nav me-auto mb-md-0 justify-content-sm-end">
                        <li className={route.includes('home') || route === 'landing' ? 'nav-item current' : 'nav-item'} onClick={() => navigate("landing")}> <a href='#home'>Home</a> </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="services" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="services">
                                <li className='nav-item'><a className="nav-link" href="#">Personal Loan</a></li>
                                <li className='nav-item'><a className="nav-link" href="#">Business Loan</a></li>
                                <li className='nav-item'><a className="nav-link" href="#">Home Loan</a></li>
                                <li className='nav-item'><a className="nav-link" href="#">Commercial Property Loan</a></li>
                                <li className='nav-item'><a className="nav-link" href="#">Loan Against Property (LAP)</a></li>
                                <li className='nav-item'><a className="nav-link" href="#">Used Car Loan</a></li>
                                <li className='nav-item'><a className="nav-link" href="#">Credit Card</a></li>
                            </ul>
                        </li>
                        {/* <li className={route.includes('partners') ? 'nav-item current' : 'nav-item'} onClick={() => navigate("landing")} > <a href='#partners'> Partners </a> </li> */}
                        <li className={route.includes('enquiry') ? 'nav-item current' : 'nav-item'} onClick={() => navigate("enquiry")}> Enquiry </li>
                        <li className='nav-item' onClick={() => navigate("landing")}> <a href='#about'> About Us </a> </li>
                        <li className='nav-item' onClick={() => navigate("landing")}> <a href='#track'> Track </a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;