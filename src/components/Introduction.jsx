import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Introduction = () => {
  return (
    <Container>
      <div class="typewriterContainer">
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
            wrapperClassName: "typewriterText",
            cursorClassName: "typewriterCursor",
          }}
        />
      </div>
    </Container>
  );
};

export default Introduction;
