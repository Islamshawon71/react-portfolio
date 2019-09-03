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
                  Our Portfolio <span></span>
                </p>
                <h2>
                  Check Our Recent <br />
                  Client Work{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">
                all
              </li>
              <li data-filter=".popular">popular</li>
              <li data-filter=".latest"> latest</li>
              <li data-filter=".following">following</li>
              <li data-filter=".upcoming">upcoming</li>
            </ul>
          </div>

          <div className="filters-content">
            <div className="row portfolio-grid">
              <div className="grid-sizer col-md-3 col-lg-3"></div>
              <div className="col-lg-6 col-md-6 all following">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p1.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 all latest popular upcoming">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p4.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 all latest following">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p2.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 all latest upcoming">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p3.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 all popular">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p6.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Lens Mockup Design</a>
                    </h4>
                    <p>Art, Illustration</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 all popular latest following">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/portfolio/p5.jpg"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Lens Mockup Design</a>
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
