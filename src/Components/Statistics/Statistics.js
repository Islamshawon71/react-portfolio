import React from "react";

function Statistics() {
  return (
    <React.Fragment>
      <section className="statistics_area">
        <div className="container">
          <div className="row justify-content-lg-start justify-content-center">
            <div className="col-lg-2 col-md-3">
              <div className="statistics_item">
                <h3>
                  <span className="counter">250</span>+
                </h3>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <div className="statistics_item">
                <h3>
                  <span className="counter">300</span>+
                </h3>
                <p>Project Complete</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <div className="statistics_item">
                <h3>
                  <span className="counter">24</span>/7
                </h3>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Statistics;
