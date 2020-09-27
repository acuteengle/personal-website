import React, { useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import $ from "jquery";

const NavigationBar = (props) => {
  const { aboutRef, projectsRef, contactRef, scrollToRef } = props;

  useEffect(() => {
    if ($(".smart-scroll").length > 0) {
      // check if element exists
      let last_scroll_top = 0;
      $(window).on("scroll", function () {
        let scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
          $(".smart-scroll")
            .removeClass("scrolled-down")
            .addClass("scrolled-up");
        } else {
          $(".smart-scroll")
            .removeClass("scrolled-up")
            .addClass("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
    }
  }, []);

  return (
    <Navbar
      expand="lg"
      className="navigation-section smart-scroll"
      sticky="top"
    >
      <Container className="">
        <Navbar.Brand href="/">
          <h1 className="navbar-name">b.eng</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="#about"
              className="nav-link"
              onClick={scrollToRef(aboutRef)}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="nav-link"
              onClick={scrollToRef(projectsRef)}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav-link"
              onClick={scrollToRef(contactRef)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
