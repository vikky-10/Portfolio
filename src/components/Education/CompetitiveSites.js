// import React from "react";
// import "./CompititiveSites.css";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

// class CompetitiveSites extends React.Component {
//   render() {
//     return (
//       <div className="competitive-sites-main-div">
//         <ul className="dev-icons">
//           {this.props.logos.map((logo) => {
//             return (
//               <OverlayTrigger
//                 key={logo.siteName}
//                 placement={"top"}
//                 style={{ marginBottom: "5px" }}
//                 overlay={
//                   <Tooltip id={`tooltip-top`}>
//                     <strong>{logo.siteName}</strong>
//                   </Tooltip>
//                 }
//               >
//                 <li className="competitive-sites-inline" name={logo.siteName}>
//                   <a
//                     href={logo.profileLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span
//                       className="iconify"
//                       data-icon={logo.iconifyClassname}
//                       style={logo.style}
//                       data-inline="false"
//                     ></span>
//                   </a>
//                 </li>
//               </OverlayTrigger>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default CompetitiveSites;

import React from "react";
import "./CompititiveSites.css";

function CompetitiveSites() {
  return (
    <div className="competitive-site-main-div">
      <ul className="dev-icon">
        <li className="competitive-sites-inline" name="HackerRank">
          <a href="https://www.hackerrank.com/layman_brother" target="_blank">
            <img
              className="ig"
              src="https://www.pngitem.com/pimgs/m/0-1917_hackerrank-hackerrank-icon-hd-png-download.png"
              alt="hr"
            />
          </a>
        </li>
        <li className="competitive-sites-inline" name="HackerRank">
          <a href="https://www.hackerrank.com/layman_brother" target="_blank">
            <img
              className="ig"
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="hr"
            />
          </a>
        </li>
        <li className="competitive-sites-inline" name="HackerRank">
          <a href="https://www.hackerrank.com/layman_brother" target="_blank">
            <img
              className="ig1"
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
              alt="hr"
            />
          </a>
        </li>
        <li className="competitive-sites-inline" name="HackerRank">
          <a href="https://www.hackerrank.com/layman_brother" target="_blank">
            <img
              className="ig"
              src="https://pngimg.com/uploads/github/github_PNG58.png"
              alt="hr"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CompetitiveSites;
