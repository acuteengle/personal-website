import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = (props) => {
  const { aboutRef, projectsRef, contactRef, scrollToRef } = props;
  return (
    <Container>
      <Navbar expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <h1 className="navbar-name">b.eng</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about" onClick={scrollToRef(aboutRef)}>
              About
            </Nav.Link>
            <Nav.Link href="#projects" onClick={scrollToRef(projectsRef)}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" onClick={scrollToRef(contactRef)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
