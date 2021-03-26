import React from "react";
import "./CompititiveSites.css";

function CompetitiveSites() {
  return (
    <div className="competitive-site-main-div">
      <ul className="dev-icon">
        <li className="competitive-sites-inline" name="HackerRank">
          <a href="https://www.hackerrank.com/vikkyhp0007" target="_blank">
            <img
              className="ig"
              src="https://www.pngitem.com/pimgs/m/0-1917_hackerrank-hackerrank-icon-hd-png-download.png"
              alt="hr"
            />
          </a>
        </li>
        <li className="competitive-sites-inline" name="HackerRank">
          <a href="https://leetcode.com/vikky_singh/" target="_blank">
            <img
              className="ig"
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="hr"
            />
          </a>
        </li>
        <li className="competitive-sites-inline" name="GFG">
          <a
            href="https://auth.geeksforgeeks.org/user/vikkysingh2/profile"
            target="_blank"
          >
            <img
              className="ig1"
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
              alt="hr"
            />
          </a>
        </li>
        <li className="competitive-sites-inline" name="Github">
          <a href="https://github.com/mrstark-A" target="_blank">
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
