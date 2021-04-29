import React from "react";
import Link from "../Link";

import "./Navi.styles.scss";

const Navi = ({ navLinks }) => {
  const renderedNavi = navLinks.map(link => {
    return (
      <Link
        id="home-btn"
        href={link.path}
        className={`nav__link ${
          link.path === window.location.pathname ? "selected" : ""
        }`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="navi">
      {/* <h2 className="heading-2">Navi</h2> */}
      <ul className="nav__list">{renderedNavi}</ul>
    </div>
  );
};

export default Navi;
