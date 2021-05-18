import React, { useContext } from "react";

import ProjectsContext from "../../context/projects.context";
import ProjectCard from "./../ProjectCard/ProjectCard.component";

import "./Projects.styles.scss";

const Projects = () => {
  const projectsData = useContext(ProjectsContext);
  return (
    <div className="projects">
      <div className="heading-component">Selected Projects</div>
      {projectsData.map(({ id, ...otherProjectProps }) => (
        <ProjectCard key={id} {...otherProjectProps} />
      ))}
    </div>
  );
};

export default Projects;
