import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import img from "../../img/prof.svg";
import "./Banner.css";
import pdf from "../../lecture7-final.pdf";
import SocialMedia from "../SocialMedia";
import Button from "../Button";

import { greeting } from "../Portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <>
      <Fade top duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1 className={"greeting-text"}>
                  {" "}
                  {greeting.title}{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <p className={"greeting-text-p subTitle"}>
                  {greeting.subTitle}
                </p>
                <SocialMedia />
                <div className="button-greeting-div">
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                </div>
              </div>
            </div>

            <div className="greeting-image-div">
              <img className="img" src={img} alt="yo" loading="lazy" />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
