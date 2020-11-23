import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import $ from "jquery";

const Introduction = (props) => {
  const { aboutRef, scrollToRef } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      $("#scroll-to-see-more").fadeTo(2000, 1);
    }, 13000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi!")
              .pauseFor(2000)
              .typeString(" I'm Brandon Eng!")
              .pauseFor(2000)
              .deleteChars(5)
              .typeString(", a full-stack web developer!")
              .start();
          }}
          options={{
            wrapperClassName: "typewriter-text",
            cursorClassName: "typewriter-cursor",
          }}
        />
        <p id="scroll-to-see-more">(scroll to see more)</p>
      </div>
      <div className="arrow-icon-container" onClick={scrollToRef(aboutRef)}>
        <svg
          viewBox="0 0 16 16"
          className="bi bi-chevron-compact-down arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
          />
        </svg>
      </div>
    </Container>
  );
};

export default Introduction;
