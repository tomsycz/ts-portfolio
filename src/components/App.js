import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import AboutSec from "./About-2";
import Contact from "./Contact";
import Navi from "./Navi";
import Projects from "./Projects";
import Route from "./Route";

const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  
];

const App = () => {
  return (
    <div className="container">
      {/* {window.addEventListener("popstate", setActiveMenuBtn)} */}
      {document.documentElement.style.setProperty(
        "--nav-size",
        navLinks.length
      )}

      <Navi navLinks={navLinks} />
      <Route path="/">
        <Header />
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
      <Footer />
    </div>
  );
};

export default App;
