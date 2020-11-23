import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tawkify from "../../images/work/tawkify.png";
import Envoys from "../../images/work/envoys.png";
import Wyzant from "../../images/work/wyzant.png";
import Workday from "../../images/work/workday.png";
import AmericanExpress from "../../images/work/americanexpress.png";
import TRXsystems from "../../images/work/trxsystems.png";

import WorkTile from "./WorkTile";
import WorkModal from "./WorkModal";

const Work = (props) => {
  const work = [
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
        "Developed RESTful API’s with middlewares for validations and redirecting.",
        "Designed and developed relational database table schemas using mySQL.",
        "Integrated several third party frameworks with our system (i.e. Stripe, Sendgrid, Segment, Optimizely, Webflow, Calendly).",
      ],
    },
    {
      id: "workday",
      url: Workday,
      title: "Workday",
      position: "Full-Stack Software Engineer",
      type: "Full-Time",
      description:
        "Technical lead for the Academic Foundation functional area on the Workday Student product. ",
      highlights: [
        "Lead point of contact for for cross team discussions about dependencies, overlap, and API’s pertaining to my functional area.",
        "Official Code Reviewer for code changes in the Academic Foundation code base.",
        "Designed and developed many features critical for go-live with our very first customers.",
        "Triaged and resolved numerous time-sensitive P0 issues.",
        "Collaborated with Product Managers and Designers to construct customer-driven solutions and user flows.",
        "Lead and worked in an agile development environment.",
      ],
    },
    {
      id: "envoys",
      url: Envoys,
      title: "Envoys",
      position: "Web Development Instructor",
      type: "Contract",
      description:
        "Developed the curriculum and lead instruction for multiple cohorts of Envoys' Tech & Coding in the 21st Century program.",
      highlights: [
        "Was the solo instructor for two cohorts of students from Phillips Exeter Academy (10-20 students each cohort).",
        "Taught the foundations of web development and how to use the tools most commonly used in industry.",
        "Created activities and assignments to assess students’ understandings of the material.",
        "Designed a final project for students to present what they have learned to the leaders of the organization as well as friends and family.",
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
      id: "wyzant",
      url: Wyzant,
      title: "Wyzant",
      position: "Tutor",
      type: "Freelance",
      description:
        "Tutored over 200 hours with students of all ages (working adults included) and skill levels on various coding languages, projects, assignments, libraries, frameworks, and tech stacks. ",
      highlights: [
        "Was hired for several consulting sessions by multiple companies looking for advice and guidance on how they should develop their web application.",
        "Coached working adults looking to better understand coding concepts and languages for their job as well as those looking to pivot in their careers to tech.",
        "Worked with high school students looking to get ahead, college students working on more advanced projects and courses, and adults taking full-time coding bootcamps.",
        "Tutored topics include (but are not limited to): HTML, CSS, Javascript, jQuery, Bootstrap, React, Python, Flask, Django, Node, Express, ChartJS, Firebase, Sequelize, HandlebarsJS, MongoDB, mySQL, Axios, Vue, Discrete Math, git/GitHub.",
      ],
    },
    {
      id: "trx_systems",
      url: TRXsystems,
      title: "TRX Systems",
      position: "Android Developer",
      type: "Internship",
      description:
        "Coded in Java to build an Android mobile app as well as communicate with our back-end API’s.",
      highlights: [
        "Enhanced the precision of TRX’s 3D tracking product when dealing with changes in elevation.",
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
