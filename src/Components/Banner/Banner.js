import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Banner() {
  return (
    <React.Fragment>
      <section className="home_banner_area" style={home_banner_area}>
        <div className="banner_inner">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="banner_content">
                  <h3>Hey There !</h3>
                  <h1 className="text-uppercase">I am Shawon</h1>
                  <h5 className="text-uppercase">Freelancer Web Developer</h5>
                  <div className="social_icons my-5">
                    <a href="#">
                      <i className="ti-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="ti-skype"></i>
                    </a>
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="ti-dribbble"></i>
                    </a>
                    <a href="#">
                      <i className="ti-vimeo"></i>
                    </a>
                  </div>
                  <AnchorLink
                    offset="100"
                    className="primary_btn"
                    href="#portfolio"
                  >
                    See My Work
                  </AnchorLink>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="home_right_img" style={home_right_img}>
                  <img
                    className="img-fluid"
                    src="img/banner/home-right.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

const home_banner_area = {
  backgroundImage: "none",
  minHeight: "auto"
};

const home_right_img = {
  backgroundImage: "url('../img/testimonials/testimonial-bg.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "contain"
};

export default Banner;
