import React from "react";

import "./Footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/tomsycz"
      >
        <i className="fab fa-github social-icon social-icon__footer"></i>
      </a>
      <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/tomasz-syczyk-424103159/"
      >
        <i className="fab fa-linkedin social-icon social-icon__footer"></i>
      </a>
    </div>
  );
};

export default Footer;
