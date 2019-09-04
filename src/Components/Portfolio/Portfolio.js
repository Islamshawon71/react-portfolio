import React from "react";

function Portfolio() {
  return (
    <React.Fragment>
      <section className="portfolio_area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title">
                <p className="top_text">
                  Portfolio <span></span>
                </p>
                <h2>
                  Check My Recent <br />
                  Client Work
                </h2>
              </div>
            </div>
          </div>

          <div className="filters-content">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p1.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p4.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p4.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p4.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p4.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p1.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;
