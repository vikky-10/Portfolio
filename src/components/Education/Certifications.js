import React, { Component } from "react";
import "./Certification.css";
import { Fade } from "react-reveal";
import { certifications } from "../Portfolio";
import CertificationCard from "./CertificateCard";

class Certifications extends Component {
  render() {
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header">Certifications</h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
