// import React from "react";
// import "./Banner.css";
// import pdf from "../lecture7-final.pdf";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaPinterest,
//   FaInstagram,
//   FaPlay,
// } from "react-icons/fa";
// const chalk = require("chalk");
// const Banner = () => {
//   const [state] = React.useState({
//     title: "I am Vikky Singh",
//     text: "i,m vikky, professional web developer",
//     image:
//       "https://raw.githubusercontent.com/animationbro/Responsive-Portfolio-Landing-pag/master/Responsive_Landing_page/images/banner-image.png",
//   });
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="row">
//           <div className="col-6">
//             <div className="header__content">
//               <div className="header__section">
//                 <ul className="header__ul">
//                   <li>
//                     <FaFacebookF className="headerIcon" />
//                   </li>
//                   <li>
//                     <FaTwitter className="headerIcon" />
//                   </li>
//                   <li>
//                     <FaPinterest className="headerIcon" />
//                   </li>
//                   <li>
//                     <FaInstagram className="headerIcon" />
//                   </li>
//                 </ul>
//                 <h1>{state.title}</h1>
//                 <p>{state.text}</p>
//                 <div className="header__buttons">
// <button
//   onClick={() => window.open(pdf, "_blank")}
//   className="btn btn-outline"
// >
//   My Portfolio
// </button>
//                   {/* &nbsp;&nbsp;&nbsp; */}
//                   {/* <a href="" className="btn btn-smart">
//                     <FaPlay className="play" />
//                   </a> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="banner__img">
//               <img
//                 className="myimg"
//                 style={{
//                   width: "100%",
//                 }}
//                 src={state.image}
//                 alt="man"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Banner;

// new
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import img from "../img/prof.svg";
import "./Banner.css";
import pdf from "../lecture7-final.pdf";
import SocialMedia from "./SocialMedia";
import Button from "./Button";
import Navbar from "./Navbar";
import { greeting } from "./Portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <>
      <Navbar />
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
                  {/* <Button text="Contact me" href="#contact" /> */}
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                </div>
              </div>
            </div>

            <div className="greeting-image-div">
              <img className="img" src={img} alt="yo" />

              {/* <Grid item sm={12} md={4} className=>
          <ProgressiveImage src="https://raw.githubusercontent.com/animationbro/Responsive-Portfolio-Landing-pag/master/Responsive_Landing_page/images/banner-image.png"  >
            {(src, loading) => (
              <img
                style={{ opacity: loading ? 0.8 : 1 }}
                src={src}
                alt='karen'
              />
            )}
          </ProgressiveImage>
        </Grid> */}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
