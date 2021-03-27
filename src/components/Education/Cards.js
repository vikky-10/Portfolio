import React from "react";
import Card from "./Card";
import "./Cards.css";
import { certifications } from "../Portfolio";
function Cards() {
  return (
    <>
      {/* <div className="cd"> */}
      <div className="c">
        {certifications.certifications.map((cert) => {
          console.log(cert);
          return <Card cert={cert} />;
        })}
      </div>
      {/* <div className="c">
          <Card />
        </div> */}
      {/* <div className="c">
          <Card />
        </div> */}
      {/* </div> */}
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </>
  );
}

export default Cards;
