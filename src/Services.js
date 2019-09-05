import React from "react";

function Services() {
  return (
    <React.Fragment>
      <section className="services_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title">
                <p className="top_text">
                  Service <span></span>
                </p>
                <h2>
                  Service Offer
                  <br />
                  For You
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="service_item">
                <img src="img/services/s1.png" alt="" />
                <h4>WP Development</h4>
                <p>
                  Pixel Perfect and 100% Responsive Design and develop using
                  WordPress , Laravel , React Js
                </p>
                <a href="#" className="primary_btn2 mt-35">
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="service_item">
                <img src="img/services/s2.png" alt="" />
                <h4>Theme Customization</h4>
                <p>Customize theme with your requrement with 100% bug fix </p>
                <a href="#" className="primary_btn2 mt-35">
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="service_item">
                <img src="img/services/s3.png" alt="" />
                <h4>Custom Developing</h4>
                <p>
                  Create custom software or function with PHP , Laravel and
                  frontend with React js
                </p>
                <a href="#" className="primary_btn2 mt-35">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Services;
