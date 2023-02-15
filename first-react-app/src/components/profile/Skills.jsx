import React from "react";

const Skills = ({ skillA, skillB, skillC }) => {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul>
        <li>{skillA}</li>
        <li>{skillB}</li>
        <li>{skillC}</li>
      </ul>
    </div>
  );
};

export default Skills;
