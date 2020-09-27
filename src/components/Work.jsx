import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Modal } from "react-bootstrap";

import Tawkify from "../images/work/tawkify.png";
import Wyzant from "../images/work/wyzant.png";
import Workday from "../images/work/workday.png";
import AmericanExpress from "../images/work/americanexpress.png";

import WorkTile from "../helper/WorkTile";

const Work = (props) => {
  const work = [
    {
      url: Tawkify,
      title: "Tawkify",
      position: "Full-Stack Software Engineer",
      type: "Full-Time",
      description:
        "Full-stack web developer (working with React, PHP, mySQL). Experience integrating several third party frameworks (i.e. Stripe, Sendgrid, Calendy, Segment, Optimizely, Webflow)",
    },
    {
      url: Wyzant,
      title: "Wyzant",
      description:
        "Tutored for over 200 hours with students of all ages and skill levels on various coding languages, projects, assignments, libraries, frameworks, tech stacks.",
    },
    {
      url: Workday,
      title: "Workday",
      description:
        "Tech Lead for my dev team in developing the academic foundational architecture of the Workday Student product",
    },
    {
      url: AmericanExpress,
      title: "American Express",
      description:
        "Built front-end UI web page using UX sketches for the Merchant Financing product",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <hr />
        <Row className="justify-content-center" id="work-container">
          {work.map((w, index) => {
            return (
              <Col xs={6} sm={4} key={index}>
                <WorkTile
                  workDetails={w}
                  setModalDetails={setModalDetails}
                  setShowModal={setShowModal}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div class="work-modal-header">
            <div>
              <img src={modalDetails.url} alt="" />
            </div>
            <div>
              <Modal.Title>{modalDetails.title}</Modal.Title>
              <p>
                {modalDetails.position} ({modalDetails.type})
              </p>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>{modalDetails.description}</Modal.Body>
      </Modal>
    </>
  );
};

export default Work;
