import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import BengPhotography from "../../images/projects/bengphotography.png";
import PMPortfolio from "../../images/projects/pmportfolio.png";
import UserProfiles from "../../images/projects/userprofiles.png";
import DataVisualization from "../../images/projects/datavisualization.png";
import EscapeRoom from "../../images/projects/escaperoom.png";

import ProjectTile from "./ProjectTile";

const Projects = (props) => {
  const projects = [
    {
      id: "beng_photography",
      url: BengPhotography,
      title: "B.eng Photography",
      website_link: "https://beng-photography.netlify.app/",
      github_link: "https://github.com/acuteengle/beng-photography",
    },
    {
      id: "pm_portfolio",
      url: PMPortfolio,
      title: "Program Manager Portfolio",
      website_link: "https://serena-wu.netlify.app/",
      github_link: "https://github.com/acuteengle/serena-wu-portfolio",
    },
    {
      id: "user_profiles",
      url: UserProfiles,
      title: "User Profiles",
      website_link: "https://acuteengle.github.io/ReactFetchAxiosRandomUser/",
      github_link: "https://github.com/acuteengle/ReactFetchAxiosRandomUser",
    },
    {
      id: "data_visualization",
      url: DataVisualization,
      title: "Data Visualization",
      website_link: "https://acuteengle.github.io/ChartJSReactRentGraphs/",
      github_link: "https://github.com/acuteengle/ChartJSReactRentGraphs",
    },
    {
      id: "escape_room",
      url: EscapeRoom,
      title: "Escape Room",
      website_link: "https://acuteengle.github.io/Escaperoom2/",
      github_link: "https://github.com/acuteengle/Escaperoom2",
    },
  ];

  return (
    <Container className="section-container">
      <h2 className="section-title">Side Projects</h2>
      <hr />
      <div className="projects-container">
        <Row className="justify-content-center">
          {projects.map((project, index) => {
            return (
              <Col xs={6} md={4} key={index} className="project-tile-container">
                <ProjectTile project={project} />
              </Col>
            );
          })}
        </Row>
        <p>*click images to see more</p>
      </div>
    </Container>
  );
};

export default Projects;
