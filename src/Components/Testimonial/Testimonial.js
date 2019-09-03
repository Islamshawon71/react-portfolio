import React, { Component } from "react";

function Testimonial() {
  return (
    <React.Fragment>
      <section className="testimonial_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title">
                <p className="top_text">
                  Tesitmonial <span></span>
                </p>
                <h2>
                  Honourable Client Says <br />
                  About Me
                </h2>
              </div>
            </div>
          </div>
          <div className="owl-carousel owl-theme testimonial-slider">
            <div className="testimonial-item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="testi-img mb-4 mb-lg-0">
                    <img src="img/testimonials/testimonial1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testi-right">
                    <h4>Roser Henrique</h4>
                    <p>
                      <small>From, Lithuania</small>
                    </p>

                    <p>
                      Order was finished in very fast and work quality are
                      perfect. Thanks. 4 sure i will order next time from you!
                      Highly recommended.
                    </p>
                    <ul className="star_rating mt-4">
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="testi-img mb-4 mb-lg-0">
                    <img src="img/testimonials/testimonial2.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testi-right">
                    <h4>Roser Henrique</h4>
                    <p>
                      <small>From , Spain</small>
                    </p>

                    <p>
                      Amazing developer. Very responsive and fast at fixing
                      issues. Highly recommended. *****AAAAA*****
                    </p>
                    <ul className="star_rating mt-3">
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="testi-img mb-4 mb-lg-0">
                    <img src="img/testimonials/testimonial3.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testi-right">
                    <h4>Patrickhillx</h4>
                    <p>
                      <small>From , Germany</small>
                    </p>

                    <p>
                      This web developer is a true professional, who will
                      deliver an outstanding service. This is no random guy, but
                      a man with true knowledge about wordpress and its inner
                      workings. So If you are looking for someone compentent,
                      who speeds up your site. This is gig is an excellent
                      choice.
                    </p>
                    <ul className="star_rating mt-3">
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </li>
                    </ul>
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

export default Testimonial;
