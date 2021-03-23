import React from "react";
import "./Skill.css";
import { Fade } from "react-reveal";
import Navbar from "./components/Navbar";
function Skill() {
  return (
    <div className="glass">
      <Navbar />
      <Fade bottom duration={1000} distance="20px">
        <div className="common cds">
          <h1 className="mainHeader"> Skills</h1>
          <p className="mainContent">
            loream5asdf dfaldf asfdadfjd asdfsdfdf asdf
          </p>
          <div className="commonBorder"></div>
        </div>
        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="skill">
          <dl class="skills-diagram">
            <dt class="skill-5">Git</dt>
            <dd>5</dd>
            <dt class="skill-10">JavaScript</dt>
            <dd>10</dd>
            <dt class="skill-3">Python</dt>
            <dd>3</dd>
            <dt class="skill-8">CSS</dt>
            <dd>8</dd>
            <dt class="skill-4">Firebase</dt>
            <dd>4</dd>
            <dt class="skill-6">c++</dt>
            <dd>6</dd>
            <dt class="skill-7"> HTML</dt>
            <dd>7</dd>
            <dt class="skill-9">Java</dt>
            <dd>9</dd>
            <dt class="skill-2">Node</dt>
            <dd>2</dd>
            <dt class="skill-11">React</dt>
            <dd>9</dd>
          </dl>
        </div>
      </Fade>
    </div>
  );
}

export default Skill;
