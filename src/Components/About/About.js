import React from "react";

function About() {
  return (
    <React.Fragment>
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className="" src="img/about-us.png" alt="" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <p className="top_text">
                  About me <span></span>
                </p>
                <h2>
                  Wordpress Developer <br />
                  And Freelancer
                </h2>
                <p style={personalDetails}>
                  Hi, I'm Shafiqul Islam, Professional WordPress Pro, and
                  WordPress Theme Developer. I have 5+ years experience
                  WordPress Design, Responsive Theme Design, Unique WP Theme
                  Development, E-Commerce React Js , React Native , Laravel.
                  Hope You Will Enjoy Working with me.
                </p>
                <a className="primary_btn" href="">
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
const personalDetails = {
  fontSize: "16"
};

export default About;
