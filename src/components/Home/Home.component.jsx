import React, { useContext } from "react";
import Typical from "react-typical";
import HomeContext from "../../context/home.context";
import Profile from "./../../img/profile.png";
import "./Home.styles.scss";

const Home = React.memo(() => {
  const { hi, name, paragraphs, roles } = useContext(HomeContext);
  return (
    <div className="home">
      <img className="profile-picture" src={Profile} alt="Avatar" />
      <div className="content-container">
        <div className="heading-container">
          <h2 className="heading-2">{hi}</h2>
          <h1 className="heading-1">{name}</h1>
          <Typical
            wrapper="h2"
            className="heading-2"
            steps={[
              `${roles[0]}`,
              3000,
              `${roles[1]}`,
              700,

              `${roles[2]}`,
              700,
              `${roles[0]}`,
              100,
            ]}
            loop={1}
          />
        </div>
        <div className="text-box">
          {paragraphs.map((paragraph, i) => (
            <div key={i}>{paragraph}</div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Home;
