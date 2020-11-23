import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectTile = (props) => {
  const { project } = props;

  return (
    <a
      href={project.website_link}
      className="website-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-image-container" id={project.id}>
        <a
          href={project.github_link}
          className="github-link d-none d-md-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="2x"
            className="icon"
          />
        </a>
        <p className="title">{project.title}</p>
        <img src={project.url} alt="" className="project-image" />
      </div>
    </a>
  );
};

export default ProjectTile;
