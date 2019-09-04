import React from "react";
import Banner from "./Components/Banner/Banner";
import Statistics from "./Components/Statistics/Statistics";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Testimonial from "./Components/Testimonial/Testimonial";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Brand from "./Components/Brand/Brand";
import Footer from "./Components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <Banner />
      <Statistics />
      <About />
      <Features />
      <Testimonial />
      <Portfolio />
      {/* <Blog /> */}
      <Brand />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
