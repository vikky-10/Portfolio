import React from "react";
import "./Home.css";

import Big from "./img/Big.svg";
import Small from "./img/small.svg";

function Home() {
  return (
    <div className="presentation">
      <div className="introduction">
        <div className="intro__text">
          <h1>I'm Vikky singh</h1>
          <h3> web Designer & Developer</h3>

          <a className="cta" href="">
            More About me
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="cover">
        <img
          className="img"
          style={{ width: "100%" }}
          src="https://raw.githubusercontent.com/animationbro/Responsive-Portfolio-Landing-pag/master/Responsive_Landing_page/images/banner-image.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
