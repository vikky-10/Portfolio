// import React from "react";

// const About = () => {
//   const [header] = React.useState({
//     subHeader: "About Me",
//     text:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
//   });
//   const [state] = React.useState([
//     { id: 1, title: "Name:", text: "Jonathan Doe" },
//     { id: 2, title: "Email:", text: "example@domain.com" },
//     { id: 3, title: "Phone:", text: "+1 023 454 345" },
//     { id: 4, title: "Linkedin", text: "Jonathan_123" },
//   ]);
//   return (
//     <div className="about">
//       <div className="container">
//         <div className="common">
//           <h1 className="mainHeader">{header.subHeader}</h1>
//           <p className="mainContent">{header.text}</p>
//           <div className="commonBorder"></div>
//         </div>
//         <div className="row  h-650 alignCenter">
//           <div className="col-6">
//             <div className="about__img">
//               <img src="/images/man-01.png" alt="man" />
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="about__info">
//               <h1>Hi There</h1>
//               <div className="about__info-p1">
//                 In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui
//                 at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
//                 efficitur sagittis, urna est ultricies eros, ac porta sem turpis
//               </div>
//               <div className="about__info-p2">
//                 nunc id efficitur sagittis, urna est ultricies eros, ac porta
//                 sem turpis porta sem turpis quis leo. Nulla in feugiat elit
//               </div>
//               <div className="info__contacts">
//                 <div className="row">
//                   {state.map((info) => (
//                     <div className="col-6">
//                       <strong>{info.title}</strong>
//                       <p>{info.text}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./About.css";
import SoftwareSkill from "./softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "./Portfolio";
import { Fade } from "react-reveal";
import img from "../img/manOnTable.svg";
// import codingPerson from "../../assets/lottie/codingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import StyleContext from "../../contexts/StyleContext";
import Navbar from "./Navbar";
export default function Skills() {
  // const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="main" id="skills">
      <Navbar />
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : ( */}
            <img alt="Man Working" src={img}></img>
            {/* ) */}
            {/* } */}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p key={i} className="subTitle skills-text">
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
