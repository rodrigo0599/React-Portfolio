import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ title, description, image, link, repo, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects");
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {title} </h1>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="buttons">Project</a>
      <a href={repo} target="_blank" rel="noopener noreferrer"className="buttons">Github</a>
    </div>
  );
}

export default ProjectItem;
