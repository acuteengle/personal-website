import React from "react";
import dayjs from "dayjs";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import myself from "../images/myself.jpg";

const About = (props) => {
  const today = dayjs();
  const startDate = dayjs('2014-06-01');
  const yearsOfExperience = Math.ceil(today.diff(startDate, 'years', true));
  return (
    <Container className="section-container">
      <h2 className="section-title">A little bit about me</h2>
      <hr />
      <Row className="justify-content-center">
        <Col xs={9} md={5}>
          <div className="myself-image-container">
            <img className="myself-image" src={myself} alt="" />
          </div>
        </Col>
        <Col xs={11} md={7}>
          <div className="myself-description-container">
            <h3>Nice to meet you!</h3>
            <p>
              {`My name is Brandon Eng and I am a software engineer with ${yearsOfExperience} years of experience in web development. I started my career at a big tech company working in the ed-tech space, where I learned to be a reliable individual contributor and then eventually the tech lead of a team. I realized that I wanted more ownership and made moves to work at a several very small seed start-ups. I fell in love with the fast-paced learning environments of early stage start-ups and being surrounded by entrepreneurial energy while trying to find Product Market Fit. I really enjoy the process of bringing new innovations to life from the ground up.`}
            </p>
            <p>
              In my free time I enjoy traveling, dancing, playing golf, and photography.
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
              <a
                href="https://www.youtube.com/c/BrandonEng/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "youtube"]}
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
