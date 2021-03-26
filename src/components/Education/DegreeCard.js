import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;

    return (
      <div className="degree-card">
        <Flip left duration={2000}>
          <div className="card-img">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                alignItems: "center",
                transform: "scale(50%, 50%)",
              }}
              src="https://seeklogo.com/images/L/lpu-sae-india-collegiate-club-logo-29B436A816-seeklogo.com.png"
              alt={degree.alt_name}
            />
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div className="body-header">
              <div className="body-header-title">
                <h2 className="card-title">{degree.title}</h2>
                <h3 className="card-subtitle">{degree.subtitle}</h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration">{degree.duration}</h3>
              </div>
            </div>
            <div classname="body-content">
              {degree.descriptions.map((sentence) => {
                return <p className="content-list">{sentence}</p>;
              })}

              <a
                href="https://www.lpu.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="visit-btn">
                  <p className="btns">Visit Website</p>
                </div>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
