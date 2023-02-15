import React from "react";
import Bio from "./Bio";
import "./Profile.style.css";
import Skills from "./Skills";
import Social from "./Social";

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <Bio name="Tanvir Rifat" title="Full Stack Web Developer" />

        <Skills skillA="JS" skillB="ReactJs" skillC="NodeJs"></Skills>

        <Social></Social>
      </div>
    );
  }
}

export default Profile;
