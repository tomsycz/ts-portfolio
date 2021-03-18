import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Navi from "./Navi";
import Projects from "./Projects";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navi />
        <Header />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
