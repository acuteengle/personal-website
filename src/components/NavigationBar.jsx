import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

import happiness from "../images/happiness.png";

const NavigationBar = () => {
  return (
    <div class="container">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <div class="happiness-image-container">
            <img
              src={happiness}
              class="happiness-image"
              alt="Icon made by Freepik from www.flaticon.com"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
