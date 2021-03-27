import React from "react";
import "./Email.css";
import { contactInfo } from "../Util/Portfolio";
import { Fade } from "react-reveal";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>
            <div className="contact-text-div">
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
