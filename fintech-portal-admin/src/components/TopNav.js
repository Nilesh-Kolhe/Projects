import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './TopNav.css';

const TopNav = (props) => {
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
                <div style={{display: 'flex'}}>
                    <a className="navbar-brand" style={{ width: '120px', fontWeight: 100, fontSize: 'medium', paddingTop: "9px", color: "#000" }}>Frontiernext</a>
                    <span id="separator" style={{ color: "#000", width: '50px', paddingTop: '7px' }}>|&nbsp;&nbsp;</span>
                    <h5 style={{ fontWeight: 100, fontSize: 'medium', paddingTop: "10px", paddingLeft: "5px", color: "#000" }}>Frontiernext Solutions Private Limited</h5>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#top-navbar" aria-controls="top-navbar" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div style={{marginRight: '15px'}} className="dropdown">
                    <a href="#" className="d-flex align-items-center link-dark text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" style={{ marginRight: '12px' }} className="rounded-circle me-2" />
                        <span style={{fontSize: 'medium', fontWeight: '500'}}>{props.profile.name}</span>
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default TopNav;