import React from "react";
import "./Contact.styles.scss";
import CVTomaszSyczyk from "./../../img/CV-ThomasSyczyk.pdf";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-box">
        <div className="heading">contact details</div>
        <div className="contact-detail">
          <div className="value name">Thomas Syczyk</div>
        </div>
        <div className="contact-detail">
          <a href="mailto:>tomsycz@gmail.com" className="value">
            tomsycz@gmail.com
          </a>
        </div>
        <div className="contact-detail">
          <a href="tel:0447479236897" className="value">
            +44 7479 236 897
          </a>
        </div>
        <div className="contact-detail">
          <a href="https://github.com/tomsycz" className="github">
            <SiGithub className="icon" /> Github
          </a>
        </div>
        <div className="contact-detail">
          <a
            href="https://linkedin.com/in/thomas-syczyk-424103159"
            className="github"
          >
            <SiLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </div>
      <a className="cv-box" href={CVTomaszSyczyk} download>
        <div className="heading">Download cv</div>
        <img
          className="cv-img"
          src="https://i.ibb.co/b76vd8R/cv.png"
          alt="CV THOMAS SYCZYK"
        />
      </a>
    </div>
  );
};

export default Contact;
