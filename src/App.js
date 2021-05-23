import React, { useContext } from "react";
import Particles from "react-particles-js";

import Home from "./components/Home/Home.component";
import Footer from "./components/Footer/Footer.component.jsx";
import About from "./components/About/About.component.jsx";
import Contact from "./components/Contact/Contact.component";
import Navi from "./components/Navi/Navi.component";
import Projects from "./components/Projects/Projects.component";
import Route from "./components/Route";

import { NAV_LINKS } from "./data/portfolio.data";
import {
  particlesConfig,
  lightParticlesConfig,
} from "./components/Particles/particles.config";
import { ModeContext } from "./providers/mode.provider";

import "./App.styles.scss";

const App = () => {
  const { isDark } = useContext(ModeContext);
  const mode = isDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", mode);

  return (
    <div className="container">
      {document.documentElement.style.setProperty(
        "--nav-size",
        NAV_LINKS.length + 1
      )}

      <Navi navLinks={NAV_LINKS} />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cv">
        <Contact />
      </Route>
      <Footer />
      <Particles
        params={isDark ? particlesConfig : lightParticlesConfig}
        className="particles"
      />
    </div>
  );
};

export default App;
