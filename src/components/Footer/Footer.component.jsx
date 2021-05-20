import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

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
        <SiGithub className=" social-icon social-icon__footer" />
      </a>
      <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/tomasz-syczyk-424103159/"
      >
        <SiLinkedin className="social-icon social-icon__footer" />
      </a>
    </div>
  );
};

export default Footer;
