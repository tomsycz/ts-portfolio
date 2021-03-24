import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Navi from "./Navi";
import Projects from "./Projects";
import Route from "./Route";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navi />
        <Route path="/">
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    );
  }
}

export default App;
