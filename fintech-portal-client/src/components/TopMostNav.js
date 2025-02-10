import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

const TopMostNav = () => {
  return (
    <nav
      id="top-most-nav-root"
      className="container navbar navbar-expand-sm navbar-light"
      aria-label="top most navbar"
    >
      <div className="container-fluid">
        <ul className="navbar-nav justify-content-sm-end w-100">
          <li className="nav-item">
            <Link to={"/"} className="text-black nav-link">
              {" "}
              Support{" "}
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/"} className="text-black nav-link">
              {" "}
              Contact Us{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopMostNav;
