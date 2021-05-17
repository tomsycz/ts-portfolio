import React from "react";

import "./Footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a className="social-link" href="/">
        <i className="fab fa-github social-icon social-icon__footer"></i>
      </a>
      <a className="social-link" href="/">
        <i className="fab fa-linkedin social-icon social-icon__footer"></i>
      </a>
    </div>
  );
};

export default Footer;
