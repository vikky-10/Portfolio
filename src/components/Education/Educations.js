import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "./DegreeCard";
import { degrees } from "../Util/Portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header">Degrees Continue</h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
