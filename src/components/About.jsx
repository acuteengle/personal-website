import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myself from "../images/myself.jpg";

const About = (props) => {
  return (
    <Container className="section-container">
      <h2 className="section-title">A little bit about me</h2>
      <hr />
      <Row className="justify-content-center">
        <Col xs={8} md={5}>
          <div className="myself-image-container">
            <img className="myself-image" src={myself} alt="" />
          </div>
        </Col>
        <Col xs={11} md={7}>
          <div className="myself-description-container">
            <h3>Nice to meet you!</h3>
            <p>
              My name is Brandon Eng and I am a Computer Science graduate from
              Cornell University and have been working in the Software
              Engineering industry for 8 years. Having worked at many different
              companies, both big and small, and I have worn many different hats
              from being a reliable individual contributor, an
              architect/technical lead, as well as a mentor to students and
              peers. I have enjoyed problem solving in my full-time work and
              contract/freelance roles, and what really inspires me is working
              on fun and interesting projects. I am passionate about learning
              and personal growth and love the opportunity to help others grow
              along the way.
            </p>
            <p>
              In my free time, I enjoy freestyle dancing and portrait
              photography.
            </p>
            <div className="social-media-icons">
              <a
                href="https://www.linkedin.com/in/brandon-eng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="2x"
                  color="green"
                  className="icon"
                />
              </a>
              <a
                href="https://github.com/acuteengle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="2x"
                  className="icon"
                />
              </a>
              <a
                href="https://www.instagram.com/b.engphotography/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  size="2x"
                  className="icon"
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
