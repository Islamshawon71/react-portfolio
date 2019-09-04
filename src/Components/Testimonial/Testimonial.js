import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

function Testimonial() {
	const options = {
		items: 1,
		nav: false,
		rewind: true,
		autoplay: true
	};

	return (
		<React.Fragment>
			<section className="testimonial_area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="main_title">
								<p className="top_text">
									Tesitmonial <span />
								</p>
								<h2>
									Honourable Client Says <br />
									About Me
								</h2>
							</div>
						</div>
					</div>

					<OwlCarousel className="owl-carousel owl-theme testimonial-slider" options={options}>
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
											Order was finished in very fast and work quality are perfect. Thanks. 4 sure
											i will order next time from you! Highly recommended.
										</p>
										<ul className="star_rating mt-4">
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
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
											Order was finished in very fast and work quality are perfect. Thanks. 4 sure
											i will order next time from you! Highly recommended.
										</p>
										<ul className="star_rating mt-4">
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
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
											Order was finished in very fast and work quality are perfect. Thanks. 4 sure
											i will order next time from you! Highly recommended.
										</p>
										<ul className="star_rating mt-4">
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
											<li>
												<span>
													<i className="fas fa-star" />
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Testimonial;
