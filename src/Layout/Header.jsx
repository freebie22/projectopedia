import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <div className="text-white">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            style={{ height: "35px", verticalAlign: "top" }}
          ></img>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                ProjectOPedia
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/topicscovered">
                  Topics Covered
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
