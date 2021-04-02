import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Footer = () => {
  return (
    <div className="contacts ">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <ul className="contactCircles">
                <li>
                  <a href="https://github.com/vikky-10" target="_blank">
                    <GitHubIcon className="contactIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_vikkysingh/"
                    target="_blank"
                  >
                    <InstagramIcon className="contactIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vikky-singh-10012001/"
                    target="_blank"
                  >
                    <LinkedInIcon className="contactIcon" />
                  </a>
                </li>
              </ul>
              <br />
              <div className="pp">
                <p className="contactCircles">© Made By Vikky Singh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
