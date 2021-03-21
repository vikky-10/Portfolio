import React, { useState, useEffect } from "react";
import "./Content.css";
import Card from "./Card";
import Skill from "./Skill";
import Experience from "./Experience";
import "./Card.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

function Content() {
  const initialLike = () => Number(window.localStorage.getItem("like") || 0);
  const initialDislike = () =>
    Number(window.localStorage.getItem("dislike") || 0);
  const initialView = () => Number(window.localStorage.getItem("view") || 0);
  const [like, setLike] = useState(initialLike);
  useEffect(() => {
    window.localStorage.setItem("like", like); // setItem is a key value pair
  }, [like]);
  const [dislike, setdislike] = useState(initialDislike);
  useEffect(() => {
    window.localStorage.setItem("dislike", dislike); // setItem is a key value pair
  }, [dislike]);
  const [view, setview] = useState(initialView);
  useEffect(() => {
    window.localStorage.setItem("view", view); // setItem is a key value pair
  }, [view]);
  return (
    <div id="one" className="content">
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="main">
        <div className="c_s">
          {/* ---------------------**********************-----------------------*******---------- */}
          {/* cards */}

          <div class="wrapper">
            <div class="img-area">
              <div class="inner-area">
                <img
                  src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
            <div class="icon arrow">
              <PeopleAltIcon />
            </div>
            <div class="icon dots">
              <MoreVertIcon />
            </div>
            <div class="name">Vikky Singh</div>
            <div class="about">Designer & Developer</div>
            <div class="social-icons">
              <a href=" https://www.linkedin.com/feed/" class="fb">
                <i>
                  <LinkedInIcon />
                </i>
              </a>
              <a href="https://twitter.com/home?lang=en" class="twitter">
                <i>
                  <TwitterIcon />
                </i>
              </a>
              <a href="https://www.instagram.com/" class="insta">
                <i>
                  <InstagramIcon />
                </i>
              </a>
              <a href="https://github.com/mrstark-A" class="yt">
                <i>
                  <GitHubIcon />
                </i>
              </a>
            </div>
            <div class="buttons">
              <button>Download CV</button>
            </div>
            <div class="social-share">
              <div class="row">
                <button onClick={() => setLike(like + 1)}>
                  <ThumbUpAltOutlinedIcon />
                </button>
                <span className="count">{like}</span>
              </div>
              <div class="row">
                <button onClick={() => setdislike(dislike + 1)}>
                  <ThumbDownAltOutlinedIcon />
                </button>
                <span className="count">{dislike}</span>
              </div>
              <div class="row">
                <button onClick={() => setview(view + 1)}>
                  <VisibilityOutlinedIcon />
                </button>
                <span className="count">{view}</span>
              </div>
            </div>
          </div>

          {/* ----------------***************-------cards----------*********-------- */}
        </div>

        <div className="about__info set">
          <p>
            <span>
              Hi! My name is vikky. I am Web Developer. "Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore dolore magna aliqua. Hi! My name is vikky. I
              am Web Developer. "Lorem ipsum dolor sit amet, consectetur
              adipiscing.
            </span>
          </p>
          <br />
          <a href="#" className="Hire">
            Hire Me
          </a>
        </div>
      </div>

      {/* <div className="about__tab"> */}
      {/* <span className="tab__item" data-target=".skills">
          Skill
        </span>
        <span className="tab__item" data-target=".experience">
          Experience
        </span>
        <span className="tab__item" data-target=".education">
          Education
        </span>
      </div> */}
      {/* <div className="sk">
        <Skill />
      </div>
      <div className="exp">
        <Experience />
      </div> */}
    </div>
  );
}

export default Content;
