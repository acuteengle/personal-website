import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Modal } from "react-bootstrap";

import Tawkify from "../images/work/tawkify.png";
import Envoys from "../images/work/envoys.png";
import Wyzant from "../images/work/wyzant.png";
import Workday from "../images/work/workday.png";
import AmericanExpress from "../images/work/americanexpress.png";
import TRXsystems from "../images/work/trxsystems.png";

import WorkTile from "../helper/WorkTile";

const Work = (props) => {
  const work = [
    {
      id: "tawkify",
      url: Tawkify,
      title: "Tawkify",
      position: "Full-Stack Software Engineer",
      type: "Full-Time",
      description: [
        "Built beautiful and responsive Front End UI using React.",
        "Built REST API routes to do server side data fetches and validations in response to client side requests.",
        "Set up middlewares between our client side and our API's using Express routes to handle validating permissions and redirecting the user.",
        "Designed and developed relational database table schemas using mySQL and considered future performance and adaptability.",
        "Integrated Stripe, Sendgrid, Calendy, Segment, Optimizely.",
      ],
    },
    {
      id: "workday",
      url: Workday,
      title: "Workday",
      position: "Full-Stack Software Engineer",
      type: "Full-Time",
      description: [
        "Technical lead and Architect for the Academic Foundation functional area on the Workday Student product.",
        "Premier point of contact for my functional area for cross team discussions about dependencies, overlap, and API’s.",
        "Developed numerous critical features for 7 product releases to enable Student to go live with its very first customers.",
        "Worked directly with product implementors to triage and resolved production issues to enable customer success.",
      ],
    },
    {
      id: "envoys",
      url: Envoys,
      title: "Envoys",
      position: "Web Development Instructor",
      type: "Contract",
      description: [
        "Developed the curriculum for Envoys' Tech & Coding in the 21st Century program. Lead instruction for the two cohorts (10-20 students each cohort) through zoom (remote program due to COVID).",
        "Taught the foundations of web development using collaborative coding environment tools.",
        "Created activities and assignments to assess student's understanding of the material.",
        "Designed a final project for students to present what they have learned to the leaders of the organization as well as friends and family.",
      ],
    },
    {
      id: "american_express",
      url: AmericanExpress,
      title: "American Express",
      position: "Front-End Web Developer",
      type: "Internship",
      description: [
        "Built a completely new front end interface for the Merchant Financing small business loan website.",
        "Incorporated animations and functionality to make the online experience easier for small businesses to apply for loans.",
        "Created a program to convert Java Objects and JSON data types between each other and transfer them across systems while maintaining their fields and attributes.",
      ],
    },
    {
      id: "wyzant",
      url: Wyzant,
      title: "Wyzant",
      position: "Tutor",
      type: "Freelance",
      description: [
        "Tutored for over 200 hours with students of all ages and skill levels on various coding languages, projects, assignments, libraries, frameworks, tech stacks.",
        "It was a great experience (and tons of fun) learning about various libraries, frameworks, and tech stacks and how they were being used, as well as helping my students better understand the concepts that they were confused about.",
        "Worked with high school students looking to get ahead, college students working on more advanced projects and courses, and adults who need consulting for their job or are looking to pivot careers.",
        "Helped students with various topics including (but not limited to): HTML, CSS, Javascript, jQuery, Bootstrap, React, Python, Flask, Django, Node, Express, ChartJS, Firebase, HandlebarsJS, MongoDB, mySQL, Axios, Discrete Math, git.",
      ],
    },
    {
      id: "trx_systems",
      url: TRXsystems,
      title: "TRX Systems",
      position: "Android Developer",
      type: "Internship",
      description: [
        "Enhanced TRX’s 3D tracking product by writing Java code that monitors and reports changes in elevation and position to improve user location accuracy.",
        "Developed from scratch an Android application that utilizes the TRX tracking system and an SQLite database to provide navigation services and guide a user with visual deficiencies (i.e full or partial blindness).",
      ],
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
        <div className="work-container">
          <Row className="justify-content-center">
            {work.map((w, index) => {
              return (
                <Col xs={6} md={4} key={index} className="work-tile-container">
                  <WorkTile
                    workDetails={w}
                    setModalDetails={setModalDetails}
                    setShowModal={setShowModal}
                  />
                </Col>
              );
            })}
          </Row>
          <p>*click images to see more</p>
        </div>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <div className="work-modal-header">
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
        <Modal.Body>
          <ul>
            {modalDetails.description &&
              modalDetails.description.map((d, index) => {
                return <li key={index}>{d}</li>;
              })}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Work;
