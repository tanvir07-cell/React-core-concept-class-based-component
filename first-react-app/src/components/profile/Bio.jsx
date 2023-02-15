import React from "react";

const Bio = ({ name, title }) => {
  return (
    <div className="bio">
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Bio;
