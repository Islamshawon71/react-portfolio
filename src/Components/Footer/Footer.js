import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="footer_top flex-column">
                <div className="footer_logo">
                  <a href="#">
                    <img src="DevShawon.png" alt="" />
                  </a>
                  <div className="d-lg-block d-none">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                      <div className="collapse navbar-collapse offset">
                        <ul className="nav navbar-nav menu_nav mx-auto">
                          <li className="nav-item">
                            <a
                              className="nav-link text-white"
                              href="index.html"
                            >
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link text-white"
                              href="about.html"
                            >
                              About
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link text-white"
                              href="portfolio.html"
                            >
                              Portfolio
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link text-white" href="blog.html">
                              BLog
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link text-white"
                              href="services.html"
                            >
                              Services{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="footer_social mt-lg-0 mt-4">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-skype"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
