import React from "react";
import Banner from "./Components/Banner/Banner";
import Statistics from "./Components/Statistics/Statistics";
import AboutMe from "./Components/About/About";
import Features from "./Components/Features/Features";
import Testimonial from "./Components/Testimonial/Testimonial";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

function About() {
  return (
    <React.Fragment>
      <AboutMe />
      <Features />
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
}

export default About;
