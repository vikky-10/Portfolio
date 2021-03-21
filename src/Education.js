import React from "react";
import "./Education.css";

function Education() {
  return (
    <div id="edu" className="education">
      <div className="titles">
        <span>Qualification</span>
        <h2 className="edu__title">My Education</h2>
      </div>
      <div className="education__container bg_grid">
        <div className="education__contain">
          <div className="glass">
            <h3 className="education__year">2010-2013</h3>
            <span className="education__university">University student</span>
          </div>
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>
          <div>
            <h3 className="education__race">deploma</h3>
            <span className="education__specialty">fontend</span>
          </div>
        </div>
        <div className="education__contain">
          <div className="glass">
            <h3 className="education__year">2010-2013</h3>
            <span className="education__university">University student</span>
          </div>
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>
          <div>
            <h3 className="education__race">deploma</h3>
            <span className="education__specialty">fontend</span>
          </div>
        </div>
        <div className="education__contain">
          <div className="glass">
            <h3 className="education__year">2010-2013</h3>
            <span className="education__university">University student</span>
          </div>
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>
          <div>
            <h3 className="education__race">deploma</h3>
            <span className="education__specialty">fontend</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
