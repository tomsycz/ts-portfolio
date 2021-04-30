import React from "react";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component.jsx";
import About from "./components/About/About.component.jsx";
import Contact from "./components/Contact/Contact.component";
import Navi from "./components/Navi/Navi.component";
import Projects from "./components/Projects/Projects.component";
import Route from "./components/Route";

import "./App.styles.scss";

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
  // {
  //   label: "☀/☾",
  //   path: "/contact",
  // },
];

const App = () => {
  return (
    <div className="container">
      {document.documentElement.style.setProperty(
        "--nav-size",
        navLinks.length +1
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
