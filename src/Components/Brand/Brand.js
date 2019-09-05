import React from "react";
import OwlCarousel from "react-owl-carousel2";

function Brands() {
  const options = {
    items: 5,
    nav: false,
    rewind: true,
    autoplay: true
  };
  return (
    <React.Fragment>
      <section className="brands-area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <OwlCarousel
                className="owl-carousel brand-carousel"
                options={options}
              >
                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo1.png" alt="" />
                  </div>
                </div>
                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo2.png" alt="" />
                  </div>
                </div>
                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo3.png" alt="" />
                  </div>
                </div>
                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo4.png" alt="" />
                  </div>
                </div>
                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo5.png" alt="" />
                  </div>
                </div>
                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo3.png" alt="" />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Brands;
