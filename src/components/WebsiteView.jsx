import React, { createRef } from "react";
import "../App.css";
import FadeInSection from "../helper/FadeInSection";

import NavigationBar from "./NavigationBar.jsx";
import Introduction from "./Introduction.jsx";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const scrollToRef = (ref) => (event) => {
  ref.current.scrollIntoView(true, { behavior: "smooth" });
  ref.current.scrollTop -= 1000;
};

const WebsiteView = (props) => {
  const aboutRef = createRef();
  const skillsRef = createRef();
  const workRef = createRef();
  const projectsRef = createRef();
  const contactRef = createRef();

  return (
    <div>
      <NavigationBar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        workRef={workRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        scrollToRef={scrollToRef}
      />
      <div className="introduction-section">
        <Introduction aboutRef={aboutRef} scrollToRef={scrollToRef} />
      </div>
      <span ref={aboutRef}></span>
      <FadeInSection>
        <div className="about-section">
          <About />
        </div>
      </FadeInSection>
      <span ref={skillsRef}></span>
      <FadeInSection>
        <div className="skills-section">
          <Skills />
        </div>
      </FadeInSection>
      <span ref={workRef}></span>
      <FadeInSection>
        <div className="work-section">
          <Work />
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
      <Footer
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        workRef={workRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        scrollToRef={scrollToRef}
      />
    </div>
  );
};

export default WebsiteView;
