import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.title || project.name}</h1>
      <img src={project.image} alt={project.title || project.name} />
      <p><b>Description:</b> {project.description}</p>
      <p><b>Skills:</b> {project.skills}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      <a href={project.repo} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
