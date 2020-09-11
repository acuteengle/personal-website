import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";

const Introduction = () => {
  return (
    <div class="container">
      <div class="typewriterContainer">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi! I'm Brandon Eng")
              .pauseFor(3000)
              .deleteChars(4)
              .typeString(", a full-stack web developer")
              .start();
          }}
          options={{
            wrapperClassName: "typewriterText",
            cursorClassName: "typewriterCursor",
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;
