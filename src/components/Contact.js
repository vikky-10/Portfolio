import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import "./Cont.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Contact = () => {
  return (
    <div className="contacts ">
      <hr className="hr" />
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              {/* <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div> */}

              <ul className="contactCircles">
                <li>
                  <GitHubIcon className="contactIcon" />
                </li>
                <li>
                  <InstagramIcon className="contactIcon" />
                </li>
                <li>
                  <LinkedInIcon className="contactIcon" />
                </li>
              </ul>
              <br />
              <p className="contactCircles">© Made By Vikky Singh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
