import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import BengPhotography from "../../images/projects/bengphotography.png";
import ThisAble from "../../images/work/thisable.png";
import AFXTech from "../../images/work/afxtech.png";
import Envoys from "../../images/work/envoys.png";
import Wyzant from "../../images/work/wyzant.png";
import Foundation1882 from "../../images/projects/1882.png";
import AZNZine from "../../images/projects/azn-zine.png";
import R3cipebook from "../../images/projects/r3cipebook.png";

import WorkTile from "../Work/WorkTile";
import WorkModal from "../Work/WorkModal";

const Projects = (props) => {
  const projects = [
    {
      id: "foundation-1882",
      url: Foundation1882,
      title: "1882 Foundation",
      position: "Full-Stack Software Engineer",
      type: "Freelance",
      description:
        "The 1882 Foundation is a non-profit, non-partisan organization approved by IRS, seeking to broaden public awareness of the history and continuing significance of the Chinese Exclusion Act of 1882. It does this through projects and activities associated with three overlapping initiatives.",
      highlights: [
        "Built a database that compiles recommendations for books, audiobooks, poetry, films, documentaries, podcasts, music, and articles related to the Asian American experience.",
        "Mentored other developers",
        "Built the application with React, Express, Sequelize, Postgresql and deployed on Netlify and Heroku",
      ],
      link: "https://1882-foundation-database.netlify.app/"
    },
    {
      id: "thisable",
      url: ThisAble,
      title: "This Able",
      position: "Founding Engineer",
      type: "Freelance",
      description:
        "This Able is a non-profit that connects working adults with disabilities with students with disabilities to provide individual mentorship and guidance as they navigate their careers. I designed and developed the full architecture for our web application.",
      highlights: [
        "Built the entire application with NextJS and deployed on Vercel and MongoDB",
        "Integrated with Firebase real-time db to create a built in messaging platform.",
        "Implemented mailJet email API to send notifications when mentors and mentees receive new messages on the platform or get a new mentor match",
        "Built an admin dashboard to show metrics of user interactions in the application",
      ],
      link: "https://this-able.org/"
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
        "Created activities and assignments to assess students' understandings of the material.",
        "Designed a final project for students to present what they have learned to the leaders of the organization as well as friends and family.",
      ],
      link: "https://home.envoys.com/"
    },
    {
      id: "afxtech",
      url: AFXTech,
      title: "AFX Tech",
      position: "Full-Stack Software Engineer",
      type: "Freelance",
      description:
        "Developed a full-stack Ruby on Rails solution that implements a sorting algorithm to fairly distribute dancers to various dance teams based on team preferences (AFX is a dance organization of 1000+ dancers at UC Berkeley.)",
      highlights: [
        "Each season, these dancers need to be distributed between various teams of different skill levels. Traditionally, these teams were picked manually and in person by the team directors/leaders. I built a flow to automate this process based on the director's dancer preferences.",
        "Lead solution design meetings with AFX Executive Board to discuss current processes and optimizations.",
        "Communicated algorithm behavior to community leaders and team directors get buy in and agreement from stake-holders.",
        "Met weekly to provide updates on the progress of the solution.",
      ],
      link: "https://afx.dance/#/about"
    },
    {
      id: "azn-zine",
      url: AZNZine,
      title: "AZN Zine",
      position: "Photographer",
      type: "Freelance",
      description:
        "Was recruited as a photographer for their bi-annual digital magazine issues that features Asian American cultural awareness",
      highlights: [
        "Designed content for their Instagram to create social media presence",
        "Curated an album of photos related to each magazine issue's theme to be published",
      ],
      link: "https://aznzine.carrd.co/"
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
      link: "https://www.wyzant.com/"
    },
    {
      id: "r3cipeBook",
      url: R3cipebook,
      title: "R3cipebook",
      type: "Side Project",
      description:
        "A personal project to create a better interface for saving recipes and viewing recipes",
      highlights: [
        "The issue that I was trying to solve was that when you find a recipe on the internet, you usually have to scroll up and down to look at the ingredients, the amounts, and the directions. I wanted to see both side by side without having to scroll back and forth",
        "Built with React, Express, Postgresql, and deployed on Netlify and Heroku",
      ],
      link: "https://r3cipebook.netlify.app/"
    },
    {
      id: "beng_photography",
      url: BengPhotography,
      title: "B.eng Photography",
      type: "Side Project",
      description:
        "A website to showcase my personal portfolio of photographs",
      highlights: [
        "I have taken photos for content creators, proposals, social events, traveling, and personal portraits",
        "Built with normal HTML, CSS, and Javascript and deployed on Netlify",
      ],
      link: "https://beng-photography.netlify.app/"
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
        <h2 className="section-title">Side Projects</h2>
        <hr />
        <div className="projects-container">
          <Row className="justify-content-center">
            {projects.map((project, index) => {
              return (
                <Col xs={6} md={4} key={index} className="project-tile-container">
                  <WorkTile
                    work={project}
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

export default Projects;
