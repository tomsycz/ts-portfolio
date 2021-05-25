import React, { useContext } from "react";

import ProjectsContext from "../../context/projects.context";
import ProjectCard from "./../ProjectCard/ProjectCard.component";

import "./Projects.styles.scss";

const Projects = () => {
  const projectsData = useContext(ProjectsContext);
  return (
    <div className="projects">
      <div className="projects-heading-box">
        <h2 className="heading">Selected Projects</h2>
        <div className="subheading">
          It might take a while to open some of the websites presented below, as
          they are deployed using Heroku Free Plan.
        </div>
      </div>

      {projectsData.map(({ id, ...otherProjectProps }) => (
        <ProjectCard key={id} {...otherProjectProps} />
      ))}
    </div>
  );
};

export default Projects;
