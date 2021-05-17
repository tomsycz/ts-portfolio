import React from "react";

import Profile from "./../../img/profile.png";
import "./Home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <img className="profile-picture" src={Profile} alt="Avatar" />
      <div className="content-container">
        <div className="heading-container">
          <h2 className="heading-2">Hi! I'm</h2>
          <h1 className="heading-1">Thomas</h1>
          <h2 className="heading-2">
            <span>I am a </span>
            <span>Front-End</span>
            <br />
            <span>Developer</span>
          </h2>
        </div>
        <i className="fab fa-react react-icon"></i>
        <div className="text text-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          placeat eius deleniti facilis quod quos nisi, consectetur adipisci
          maiores molestiae debitis dolores, alias voluptates totam sunt
          minusquod quos nisi, consectetur adipisci maiores molestiae debitis
          dolores, alias voluptates totam sunt minus at molestias quam.
        </div>
        <div className="text text-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          blanditiis quod inventore alias, enim nostrum. Dolorum modi ea
          accusamus ipsa assumenda nam, illum eos maxime quae repudiandae ad,
          atque repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui blanditiis quod inventore alias, enim nostrum. Dolorum modi
          ea accusamus ipsa assumenda nam, illum eos maxime quae repudiandae ad,
          atque repellendus!
        </div>
      </div>
    </div>
  );
};

export default Home;
