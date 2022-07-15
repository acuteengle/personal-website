import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import react from "../../images/skills/react.png";
import Node from "../../images/skills/node.png";
import mySQL from "../../images/skills/mysql.png";
import Git from "../../images/skills/git.png";
// import HTMLCSSJS from "../../images/skills/htmlcssjs.png";
// import Jquery from "../../images/skills/jquery.png";
import Python from "../../images/skills/python.png";
import Bootstrap from "../../images/skills/bootstrap.png";
// import MaterialUI from "../../images/skills/materialui.png";
// import Express from "../../images/skills/express.png";
// import Flask from "../../images/skills/flask.png";
// import Django from "../../images/skills/django.png";
// import Handlebars from "../../images/skills/handlebars.png";
import MongoDB from "../../images/skills/mongodb.png";
// import PHP from "../../images/skills/php.png";
// import Ruby from "../../images/skills/ruby.png";
// import Rails from "../../images/skills/rails.png";
// import Sequelize from "../../images/skills/sequelize.png";
import Postgres from "../../images/skills/postgres.png";
import AntDesign from "../../images/skills/ant-design.png";
import ChartJS from "../../images/skills/chartjs.png";
import NextJS from "../../images/skills/nextjs.png";
import Knex from "../../images/skills/knex.png";
import ReactHookForm from "../../images/skills/react-hook-form.png";
import Firebase from "../../images/skills/firebase.png";
import Cypress from "../../images/skills/cypress.png";
import Jest from "../../images/skills/jest.png";
import Heroku from "../../images/skills/heroku.png";
import Netlify from "../../images/skills/netlify.png";

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
      url: mySQL,
      title: "mySQL",
    },
    {
      url: MongoDB,
      title: "MongoDB",
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
      url: Bootstrap,
      title: "Bootstrap",
    },
    {
      url: AntDesign,
      title: "Ant Design",
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
      url: Firebase,
      title: "Firebase",
    },
    {
      url: Heroku,
      title: "Heroku",
    },
    {
      url: Netlify,
      title: "Netlify",
    },
    {
      url: ReactHookForm,
      title: "React Hook Form",
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
    </Container>
  );
};

export default Skills;
