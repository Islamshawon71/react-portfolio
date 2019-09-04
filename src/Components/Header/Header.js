import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <React.Fragment>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="/">
                <img src="DevShawon.png" alt="" />
              </a>
              <a className="navbar-brand logo_inner_page" href="/">
                <img src="DevShawon.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav">
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/portfolio">
                      Portfolio
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink exact className="nav-link" to="/blog">
                      Blog
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item hire-me-button">
                    <a className="primary_btn " href="/contact">
                      <span>Hire Me</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
