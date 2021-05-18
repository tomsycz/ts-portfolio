import React, { useContext } from "react";
import { SiReact } from "react-icons/si";

import HomeContext from "../../context/home.context";
import Profile from "./../../img/profile.png";
import "./Home.styles.scss";

const Home = () => {
  const { hi, name, role, paragraphs } = useContext(HomeContext);
  return (
    <div className="home">
      <img className="profile-picture" src={Profile} alt="Avatar" />
      <div className="content-container">
        <div className="heading-container">
          <h2 className="heading-2">{hi}</h2>
          <h1 className="heading-1">{name}</h1>
          <h2 className="heading-2">{role}</h2>
        </div>
        <SiReact className="react-icon" />
        <div className="text-box">
          {paragraphs.map(paragraph => (
            <div>{paragraph}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
