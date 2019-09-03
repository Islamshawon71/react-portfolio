import React from "react";
import Banner from "./Components/Banner/Banner";
import Statistics from "./Components/Statistics/Statistics";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Testimonial from "./Components/Testimonial/Testimonial";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

function Contact() {
  return (
    <React.Fragment>
      <Banner />
      <Statistics />
      <About />
      <Features />
      <Testimonial />
      <Portfolio />
      <Blog />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
