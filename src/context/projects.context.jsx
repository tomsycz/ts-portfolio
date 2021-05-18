import { createContext } from "react";

import { PROJECTS_DATA } from "./../data/portfolio.data";

const ProjectsContext = createContext(PROJECTS_DATA);

export default ProjectsContext;
