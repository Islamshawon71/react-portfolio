import React from "react";

function Map() {
  return (
    <React.Fragment>
      <section className="section-map section_gap">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.698434455354!2d90.36313087250787!3d23.788383105640293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cbc574d471%3A0x7254e5f26bd2253c!2sPirerbag%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1567628376096!5m2!1sen!2sbd"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>

          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8 mb-4 mb-lg-0">
              <form
                className="form-contact contact_form"
                action=""
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-lg-3">
                  <button
                    type="button"
                    className="primary_btn button-contactForm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Mirpur 2 Pirerbag.</h3>
                  <p>Dhaka 1216</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>
                    <a href="tel:01947990483">01947990483</a>
                  </h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body">
                  <h3>
                    <a href="mailto:islamshawon1993@gmail.com">
                      islamshawon1993@gmail.com
                    </a>
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Map;
