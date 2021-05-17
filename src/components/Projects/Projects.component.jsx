import React, { useContext } from "react";
import Slider from "react-slick";

import ProjectsContext from "./../../context/Projects/projects.context";
import ProjectCard from "./../ProjectCard/ProjectCard.component";

import "./Projects.styles.scss";

const Projects = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const projects = useContext(ProjectsContext);
  return (
    <div className="projects">
      <div className="heading-component">Selected Projects</div>
      {projects.map(({ id, ...otherProjectProps }) => (
        <ProjectCard key={id} {...otherProjectProps} />
      ))}
    </div>
  );
};

export default Projects;
