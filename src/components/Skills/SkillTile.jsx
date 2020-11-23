import React from "react";

const SkillTile = (props) => {
  const { skill } = props;
  return (
    <div className="skill-image-container">
      <img className="skill-image" src={skill.url} alt="" />
      <p className="skill-title">{skill.title}</p>
    </div>
  );
};

export default SkillTile;
