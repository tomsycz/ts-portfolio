import React, { useContext } from "react";
import Particles from "react-particles-js";

import Home from "./components/Home/Home.component";
import Footer from "./components/Footer/Footer.component.jsx";
import About from "./components/About/About.component.jsx";
import Contact from "./components/Contact/Contact.component";
import Navi from "./components/Navi/Navi.component";
import Projects from "./components/Projects/Projects.component";
import Route from "./components/Route";

import {
  particlesConfig,
  lightParticlesConfig,
} from "./components/Particles/particles.config";
import { ModeContext } from "./providers/mode.provider";

import "./App.styles.scss";

const navLinks = [
  {
    label: "Home",
    path: "/",
    id: 1,
  },
  {
    label: "About",
    path: "/about",
    id: 2,
  },
  {
    label: "Projects",
    path: "/projects",
    id: 3,
  },
  {
    label: "Contact",
    path: "/contact",
    id: 4,
  },
];

const App = () => {
  const { isDark } = useContext(ModeContext);
  const mode = isDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", mode);
  console.log(particlesConfig.background.color.value);

  return (
    <div className="container">
      {document.documentElement.style.setProperty(
        "--nav-size",
        navLinks.length + 1
      )}

      <Navi navLinks={navLinks} />
      <Route path="/">
        <Home />
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
      <Particles
        params={isDark ? particlesConfig : lightParticlesConfig}
        className="particles"
      />
    </div>
  );
};

export default App;
