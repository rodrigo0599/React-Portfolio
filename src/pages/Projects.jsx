import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Project() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem 
              key={idx} 
              id={idx} 
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              repo={project.repo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
