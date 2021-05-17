import React from "react";

import natoursPhoto from "./../../img/Natours.png";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiNodeDotJs,
  SiSass,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiGraphql,
  SiGithub,
} from "react-icons/si";

import "./ProjectCard.styles.scss";

const iconsMap = {
  SiReact,
  SiRedux,
  SiJavascript,
  SiNodeDotJs,
  SiSass,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiGraphql,
  SiGithub,
};

const ProjectCard = ({ name, description, techStack, apis, links, image }) => {
  console.log(image);
  return (
    <div className="project">
      <div
        className="project-image"
        style={{ backgroundImage: "var(--card-gradient), url(" + image + ")" }}
      >
        <div className="project-name">{name}</div>
      </div>
      <div className="project-details">
        <div className="project-description">{description}</div>
        <div className="project-tech">
          <h3 className="category">Tech Stack</h3>
          <ul className="tech-list">
            {techStack.map(tech => {
              const SiIcon = iconsMap["Si" + tech];
              return (
                <li key={tech} className="tech-logo">
                  <SiIcon key={tech} className="logo" alt="HTML" />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="project-apis">
          <h3 className="category">APIs</h3>
          <ul className="apis-list">
            {apis.map(api => (
              <li key={api} className="api">
                {api}
              </li>
            ))}
          </ul>
        </div>
        <div className="project-links">
          <a className="project-link git-link" href={links[0]}>
            <SiGithub className="project-git" />
            repository
          </a>
          <a className="project-link web-link" href={links[1]}>
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
