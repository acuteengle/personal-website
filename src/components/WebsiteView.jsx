import React from "react";
import "../App.css";
import NavigationBar from "./NavigationBar.jsx";
import Introduction from "./Introduction.jsx";
// import Header from "./Header";
// import About from "./About";
// import Experience from "./Experience";
// import Projects from "./Projects";

const App = () => {
  return (
    <div>
      <div class="navigationSection">
        <NavigationBar />
      </div>
      <div class="introductionSection">
        <Introduction />
      </div>
      {/* <Header />
      <About />
      <Experience />
      <Projects /> */}
    </div>
  );
};

export default App;
