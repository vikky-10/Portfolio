import React from "react";
import "./Experience.css";
import pdf from "./lecture7-final.pdf";

function Experience() {
  return (
    <div id="exp" className="exp">
      <div class="card1">
        <div class="circle"></div>
        <h2 class="heading">Hello bois</h2>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi
            ipsa beatae ut magni reiciendis qui distinctio voluptate error
            tempora!
          </p>
          <br />
          <a href={pdf} className="resume">
            📘 Resume Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
