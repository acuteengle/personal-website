import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  const {
    aboutRef,
    skillsRef,
    workRef,
    projectsRef,
    contactRef,
    scrollToRef,
  } = props;

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          You can also email me at <b>beng713@gmail.com</b> for further
          inquiries.
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
        </div>
        <Navbar>
          <Nav>
            <Nav.Link className="nav-link" onClick={scrollToRef(aboutRef)}>
              About
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={scrollToRef(skillsRef)}>
              Skills
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={scrollToRef(workRef)}>
              Experience
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={scrollToRef(projectsRef)}>
              Projects
            </Nav.Link>
            <Nav.Link className="nav-link" onClick={scrollToRef(contactRef)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </footer>
  );
};

export default Footer;
