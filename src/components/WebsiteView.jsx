import React, { createRef } from "react";
import "../App.css";
import FadeInSection from "../helper/FadeInSection";

import NavigationBar from "./NavigationBar.jsx";
import Introduction from "./Introduction.jsx";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const scrollToRef = (ref) => (event) => {
  ref.current.scrollIntoView(true, { behavior: "smooth" });
  ref.current.scrollTop -= 1000;
};

const App = () => {
  const aboutRef = createRef();
  const projectsRef = createRef();
  const contactRef = createRef();

  return (
    <div>
      <div className="navigation-section">
        <NavigationBar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          scrollToRef={scrollToRef}
        />
      </div>
      <div className="introduction-section">
        <Introduction aboutRef={aboutRef} scrollToRef={scrollToRef} />
      </div>
      <span ref={aboutRef}></span>
      <FadeInSection>
        <div className="about-section">
          <About />
        </div>
      </FadeInSection>
      <span ref={projectsRef}></span>
      <FadeInSection>
        <div className="projects-section">
          <Projects />
        </div>
      </FadeInSection>
      <span ref={contactRef}></span>
      <FadeInSection>
        <div className="contact-section">
          <Contact />
        </div>
      </FadeInSection>
    </div>
  );
};

export default App;
