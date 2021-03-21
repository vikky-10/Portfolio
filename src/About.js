import React from "react";
import "./About.css";
import Card from "./Card";
import Skill from "./Skill";
function About() {
  return (
    <div className="about">
      <section className="about__section section">
        {/* about tab */}
        <div className="row"></div>
        {/* skill */}
        {/* <div className="row">
            <div className="skills tab__content">
                <div className="row">
                    <div className="skill__item">
                        <p>HTML</p>
                        <div className="progress">
                            <div className="progress__bar" style={{width:"calc(50%-14px)"}}>
<span>50%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      </section>
      <Skill />
    </div>
  );
}

export default About;
