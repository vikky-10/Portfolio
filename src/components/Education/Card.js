import React from "react";
import "./Card.css";
import img from "../../img/developerActivity.svg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { certifications } from "../Portfolio";

function Card({ cert }) {
  return (
    <div class="wrapper">
      <div class="icon arrow">
        <PeopleAltIcon />
      </div>
      <div class="icon dots">
        <MoreVertIcon />
      </div>
      <br />
      <br />
      <div class="imgcont">
        <img className="imgs" src={img} alt="yo"></img>
      </div>
      <div class="name">
        <h5>{cert.title}</h5>

        <div class="subname">
          <h6>{cert.subtitle}</h6>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div class="buttons">
        <a href={cert.certificate_link} target="_blank">
          <button>Download certificate</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
