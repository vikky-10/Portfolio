import React from "react";
import "./About.css";
import SoftwareSkill from "../softwareSkills/SoftwareSkill";
import { skillsSection } from "../Portfolio";
import { Fade } from "react-reveal";
import img from "../../img/manOnTable.svg";

import Navbar from "../Navbar";
export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="main" id="skills">
      <Navbar />
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img alt="Man Working" src={img} loading="lazy"></img>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p key={i} className="subTitle skills-text">
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
