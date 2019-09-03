import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/shop/:id" component={ItemDetails} /> */}
      </Router>
    </React.Fragment>
  );
}

export default App;
