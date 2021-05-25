import React, { useContext, useState } from "react";
import Particles from "react-particles-js";

import Home from "./components/Home/Home.component";
import Footer from "./components/Footer/Footer.component.jsx";
import Contact from "./components/Contact/Contact.component";
import Navi from "./components/Navi/Navi.component";
import ToggleNaviButton from "./components/Navi/MobileNaviToggle.component";
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
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { isDark } = useContext(ModeContext);
  const mode = isDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", mode);
  let fav = document.getElementById("favicon");
  fav.href = `/favicon-${mode}.ico`;

  //Display mobile menu button and hide nav
  React.useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const renderNavi = width => {
    return width > 600 ? (
      <Navi navLinks={NAV_LINKS} />
    ) : (
      <div style={{ zIndex: "100" }}>
        <ToggleNaviButton navLinks={NAV_LINKS} />
      </div>
    );
  };

  return (
    <div className="container">
      {document.documentElement.style.setProperty(
        "--nav-size",
        NAV_LINKS.length + 1
      )}
      {renderNavi(viewportWidth)}
      <Route path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
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
