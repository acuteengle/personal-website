import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectTile = (props) => {
  const { projectDetails } = props;

  return (
    <a
      href={projectDetails.website_link}
      className="website-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-image-container" id={projectDetails.id}>
        <a
          href={projectDetails.github_link}
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="2x"
            className="icon"
          />
        </a>
        <p className="title">{projectDetails.title}</p>
        <img src={projectDetails.url} alt="" className="project-image" />
      </div>
    </a>
  );
};

export default ProjectTile;
