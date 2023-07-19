import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import react from "../../images/skills/react.png";
import Node from "../../images/skills/node.png";
import Git from "../../images/skills/git.png";
import Python from "../../images/skills/python.png";
import MongoDB from "../../images/skills/mongodb.png";
import Postgres from "../../images/skills/postgres.png";
import ChartJS from "../../images/skills/chartjs.png";
import NextJS from "../../images/skills/nextjs.png";
import Knex from "../../images/skills/knex.png";
import Firebase from "../../images/skills/firebase.png";
import Cypress from "../../images/skills/cypress.png";
import Jest from "../../images/skills/jest.png";

import SkillTile from "./SkillTile";

const Skills = (props) => {
  const skills = [
    {
      url: react,
      title: "React",
    },
    {
      url: Node,
      title: "Node",
    },
    {
      url: Postgres,
      title: "Postgresql",
    },
    {
      url: MongoDB,
      title: "MongoDB",
    },
    {
      url: Firebase,
      title: "Firebase",
    },
    {
      url: Git,
      title: "Git/Github",
    },
    {
      url: Python,
      title: "Python",
    },
    {
      url: ChartJS,
      title: "Chart JS",
    },
    {
      url: NextJS,
      title: "Next JS",
    },
    {
      url: Knex,
      title: "Knex",
    },
    {
      url: Cypress,
      title: "Cypress",
    },
    {
      url: Jest,
      title: "Jest",
    },
  ];
  return (
    <Container className="section-container">
      <h2 className="section-title">Skills</h2>
      <hr />
      <Row className="justify-content-center">
        {skills.map((skill, index) => {
          return (
            <Col xs={3} md={2} key={index}>
              <SkillTile skill={skill} />
            </Col>
          );
        })}
      </Row>
      <p>(and more)</p>
    </Container>
  );
};

export default Skills;
