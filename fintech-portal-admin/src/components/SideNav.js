import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './SideNav.css';
import { useNavigate, useLocation } from "react-router-dom";

const SideNav = () => {

    const navigate = useNavigate();
    const route = window.location.href.split('/')[3];
    console.log('Route: ', route);

    return (
        <>
            <div className="d-flex flex-column p-3 bg-light" style={{ width: "200px", height: "515px", backgroundColor: "lightgrey!important" }}>
                <ul className="nav flex-column mb-auto">
                    <li className={route.includes('home') || route === 'home' ? 'nav-item current' : 'nav-item'} onClick={() => navigate("home")}>
                        Home
                    </li>
                    <li className={route.includes('enquiries') || route === 'enquiries' ? 'nav-item current' : 'nav-item'} onClick={() => navigate("enquiries")}>
                        Enquiries
                    </li>
                    <li className="nav-item">
                        Orders
                    </li>
                    <li className="nav-item">
                        Products
                    </li>
                    <li className="nav-item">
                        Customers
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideNav;