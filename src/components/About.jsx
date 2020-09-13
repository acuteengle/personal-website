import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import myself from "../images/myself.jpg";

const About = () => {
  return (
    <Container className="section-container">
      <h2 class="section-title">A little bit about me</h2>
      <hr />
      <Row>
        <Col md={12} lg={4}>
          <div class="myself-image-container">
            <img class="myself-image" src={myself} alt="" />
          </div>
        </Col>
        <Col md={12} lg={8}>
          <div class="myself-description-container">
            <h3>Nice to meet you!</h3>
            <p>
              I am a Computer Science graduate from Cornell University and have
              been working in the Software Engineering industry for 8 years. No
              matter what your goal is with coding (finishing projects,
              preparing for an interview, or even learning the basics), I can
              mentor you by helping you hone your skills and build your
              confidence. Back at University, I was a TA for several Web
              Development courses and I loved helping students work on their
              projects and fully understand the principle coding concepts in the
              process. I only got to this point after spent countless hours
              building projects and websites on my own for personal clients and
              live customers. I have built many products using a wide range of
              coding languages (HTML, CSS, Javascript, jQuery, React, Python,
              PHP, SQL). I have also worked at many different companies, both
              big (American Express, Workday) and small (start ups of 10
              people). I can provide insight on the culture and skills that you
              will need to work at both. In addition, I have spent countless
              hours both interviewing and being interviewed for the the dreaded
              technical interview. I understand what qualities interviewers look
              for and I can help walk you through my thought process of how you
              should approach problems and what things you should look for. If
              any of these things sound interesting to you, I'd love to schedule
              some time to work with you! It would be bring me so much joy to
              help you work on whatever project you are interested in and teach
              you along the way!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
