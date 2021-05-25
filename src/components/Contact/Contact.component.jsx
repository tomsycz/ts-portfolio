import React from "react";
import "./Contact.styles.scss";
import Spinner from "../Spinner/Spinner.component";
import CVTomaszSyczyk from "./../../img/CV-ThomasSyczyk.pdf";
import CVMiniature from "./../../img/CV-miniature.png";

const Contact = () => {
  return (
    <div className="contact">
      <a href={CVTomaszSyczyk} download>
        <img src={CVMiniature} alt="CV THOMAS SYCZYK" />
      </a>
    </div>
  );
};

export default Contact;
