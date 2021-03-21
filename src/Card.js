import React from "react";
import "./Card.css";
import img from "./img/developerActivity.svg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { certifications } from "./components/Portfolio";

function Card({ cert }) {
  return (
    <div class="wrapper">
      {/* <div class="img-area">
          <div class="inner-area">
            <img
              src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div> */}

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
      <div class="name">Vikky Singh</div>
      <p>discription</p>
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
