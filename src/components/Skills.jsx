import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import react from "../images/skills/react.png";
import Node from "../images/skills/node.png";
import mySQL from "../images/skills/mysql.png";
import Git from "../images/skills/git.png";
import HTMLCSSJS from "../images/skills/htmlcssjs.png";
import Jquery from "../images/skills/jquery.png";
import Python from "../images/skills/python.png";
import Bootstrap from "../images/skills/bootstrap.png";
import MaterialUI from "../images/skills/materialui.png";
import Express from "../images/skills/express.png";
import Flask from "../images/skills/flask.png";
import Django from "../images/skills/django.png";

import SkillImage from "../helper/SkillImage";

const Skills = () => {
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
      url: mySQL,
      title: "mySQL",
    },
    {
      url: Git,
      title: "Git/Github",
    },
    {
      url: HTMLCSSJS,
      title: "HTML/CSS/Javascript",
    },
    {
      url: Jquery,
      title: "jQuery",
    },
    {
      url: Python,
      title: "Python",
    },
    {
      url: Bootstrap,
      title: "Bootstrap",
    },
    {
      url: MaterialUI,
      title: "Material UI",
    },
    {
      url: Express,
      title: "Express",
    },
    {
      url: Flask,
      title: "Flask",
    },
    {
      url: Django,
      title: "Django",
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
              <SkillImage url={skill.url} title={skill.title} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Skills;
