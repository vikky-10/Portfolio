// import React from "react";
// import Eduction from "../Education";
// const Prices = () => {
//   const [header] = React.useState({
//     mainHeader: "CHOOSE A PLAN",
//     subHeading: "Pricing Plan",
//     text:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
//   });
//   const [state] = React.useState([
//     {
//       id: 1,
//       heading: "Basic",
//       price: 50,
//       msg1: "5GB Storage Space",
//       msg2: "20GB Monthly Bandwidth",
//       msg3: "My SQL Databases",
//       msg4: "100 Email Account",
//       msg5: "10 Free Domain Names",
//     },
//     {
//       id: 2,
//       heading: "Standard",
//       price: 80,
//       msg1: "5GB Storage Space",
//       msg2: "20GB Monthly Bandwidth",
//       msg3: "My SQL Databases",
//       msg4: "100 Email Account",
//       msg5: "10 Free Domain Names",
//     },
//     {
//       id: 3,
//       heading: "Premium",
//       price: 160,
//       msg1: "5GB Storage Space",
//       msg2: "20GB Monthly Bandwidth",
//       msg3: "My SQL Databases",
//       msg4: "100 Email Account",
//       msg5: "10 Free Domain Names",
//     },
//   ]);
//   return (
//     <div className="prices">
//       <Eduction />
//       <div className="container">
//         <div className="common">
//           <h3 className="heading">{header.mainHeader}</h3>
//           <h1 className="mainHeader">{header.subHeading}</h1>
//           <p className="mainContent">{header.text}</p>
//           <div className="commonBorder"></div>
//         </div>
//         <div className="row">
//           {state.map((prices) => (
//             <div className="col-4" key={prices.id}>
//               <div className="price">
//                 <div className="priceHeading">${prices.heading}</div>
//                 <div className="price__rs">
//                   <span>$</span>
//                   {prices.price}
//                 </div>
//                 <ul>
//                   <li>{prices.msg1}</li>
//                   <li>{prices.msg2}</li>
//                   <li>{prices.msg3}</li>
//                   <li>{prices.msg4}</li>
//                   <li>{prices.msg5}</li>
//                 </ul>
//                 <div className="price__btn">
//                   <a href="" className="btn btn-outline">
//                     Purchase
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Prices;

import React, { useState, createRef } from "react";
import "./Prices.css";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  // const GetDescBullets = ({ descBullets }) => {
  //   return descBullets
  //     ? descBullets.map((item, i) => (
  //         <li key={i} className="subTitle">
  //           {item}
  //         </li>
  //       ))
  //     : null;
  // };

  return (
    <div className="experience-card">
      <div
        style={{ background: rgb(colorArrays) }}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company"> ekka tech</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          // src={cardInfo.companylogo}
          src=""
          alt=""
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{/* {cardInfo.role} */}</h5>
        <h5 className="experience-text-date"> 1/02/2001</h5>
        <p className="subTitle experience-text-desc"> loream this is funny</p>
        <ul>{/* <GetDescBullets descBullets="this is first " /> */}</ul>
      </div>
    </div>
  );
}
