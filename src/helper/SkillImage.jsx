import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillImage = (props) => {
  const { url, title } = props;
  return (
    <div className="skill-image-container">
      <img className="skill-image" src={url} alt="" />
      <p className="skill-title">{title}</p>
    </div>
  );
};

export default SkillImage;
