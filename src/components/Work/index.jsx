import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tawkify from "../../images/work/tawkify.png";
import Workday from "../../images/work/workday.png";
import AmericanExpress from "../../images/work/americanexpress.png";
import TRXsystems from "../../images/work/trxsystems.png";
import Subscript from "../../images/work/subscript.png";

import WorkTile from "./WorkTile";
import WorkModal from "./WorkModal";

const Work = (props) => {
  const work = [
    {
      id: "subscript",
      url: Subscript,
      title: "Subscript",
      position: "Senior Full-Stack Software Engineer",
      type: "Full-Time",
      description:
        "Joined the company when it was only a few months old and built much of the initial product. The tech stack was React, Node Express, and Postresql.",
      highlights: [
        "Full-time employee #3",
        "Spent time interacting with customers to get feedback and iterate on our product on our journey to find Product Market Fit.",
        "The company is globally distributed and completely asynchronous (i.e. no meetings).",
        "Set many of the initial engineering processes for the company as well as team culture."
      ],
    },
    {
      id: "tawkify",
      url: Tawkify,
      title: "Tawkify",
      position: "Full-Stack Software Engineer",
      type: "Full-Time",
      description:
        "Built features using React (and React Hooks), Material UI, Recompose on the Front-End as well as Node Express and PHP Slim on the backend.",
      highlights: [
        "Lead the initiative to build our brand new web application to allow users to sign up and create an account.",
        "Developed RESTful API's with middlewares for validations and redirecting.",
        "Designed and developed relational database table schemas using mySQL.",
        "Integrated several third party frameworks with our system (i.e. Stripe, Sendgrid, Segment, Optimizely, Webflow, Calendly).",
      ],
    },
    {
      id: "workday",
      url: Workday,
      title: "Workday",
      position: "Software Application Engineer",
      type: "Full-Time",
      description:
        "Technical lead for the Academic Foundation functional area on the Workday Student product. ",
      highlights: [
        "Lead point of contact for for cross team discussions about dependencies, overlap, and API's pertaining to my functional area.",
        "Official Code Reviewer for code changes in the Academic Foundation code base.",
        "Designed and developed many features critical for go-live with our very first customers.",
        "Triaged and resolved numerous time-sensitive P0 issues.",
        "Collaborated with Product Managers and Designers to construct customer-driven solutions and user flows.",
        "Lead and worked in an agile development environment.",
      ],
    },
    {
      id: "american_express",
      url: AmericanExpress,
      title: "American Express",
      position: "Front-End Web Developer",
      type: "Internship",
      description:
        "Developed various features, both front-end and back-end on the Project Mercury team.",
      highlights: [
        "Built a completely new front-end landing page for the Merchant Financing product.",
        "Incorporated animations and functionality to make the online experience easier for small businesses to apply for loans.",
        "Created a program to convert Java Objects and JSON data types between each other and transfer them across systems while maintaining their fields and attributes.",
      ],
    },
    {
      id: "trx_systems",
      url: TRXsystems,
      title: "TRX Systems",
      position: "Android Developer",
      type: "Internship",
      description:
        "Coded in Java to build an Android mobile app as well as communicate with our back-end API's.",
      highlights: [
        "Enhanced the precision of TRX's 3D tracking product when dealing with changes in elevation.",
        "Developed from scratch an Android application that utilizes the TRX tracking system and an SQLite database to navigate a user with visual deficiencies (i.e full or partial blindness).",
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
            {work.map((work, index) => {
              return (
                <Col xs={6} md={4} key={index} className="work-tile-container">
                  <WorkTile
                    work={work}
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
      <WorkModal
        show={showModal}
        onHide={handleCloseModal}
        modalDetails={modalDetails}
      />
    </>
  );
};

export default Work;
