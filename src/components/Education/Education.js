import React, { Component } from "react";

import Educations from "./Educations";
import Certifications from "./Certifications";
import CompetitiveSites from "./CompetitiveSites";
// import EducationImg from "./EducationImg";
import Card from "../Cards";
import Navbar from "../Navbar";
import "./Education.css";
import { Fade } from "react-reveal";
import edu from "./edu.svg";
class Education extends Component {
  render() {
    return (
      <div className="education-main">
        <Navbar className="head" />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img src={edu} alt="" />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text">Education</h1>
                <h3 className="heading-sub-text">
                  Basic Qualification and Certifcations
                </h3>
                {/* <CompetitiveSites /> */}
              </div>
            </div>
          </Fade>
          <Educations />
          <Certifications />
          <Card />
        </div>
        {/* <Footer theme={this.props.theme} /> */}
        {/* <TopButton theme={this.props.theme} /> */}
      </div>
    );
  }
}

export default Education;
