import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <h2 className="logo">
        <a className="hm" href="/">
          Vikky Singh{" "}
        </a>
      </h2>

      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
        <i className="fas fa-bars hid" />
      </label>

      <ul className="menu">
        <li>
          <NavLink exact className="links" to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="links"
            exact
            activeClassName="active_class"
            to="Services"
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            className="links"
            exact
            activeClassName="active_class"
            to="/Skill"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            className="links"
            exact
            activeClassName="active_class"
            to="/Cards"
          >
            Education
          </NavLink>
        </li>
        <li>
          {/* <NavLink
            className="links"
            exact
            to={{
              pathname: "https://web-blogs.netlify.app",
            }}
            target="_blank"
          >
            Blog
          </NavLink> */}
          <NavLink
            className="links"
            exact
            activeClassName="active_class"
            to="/Blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className="links"
            exact
            activeClassName="active_class"
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
        <label htmlFor="chk" className="hide-menu-btn">
          <i className="fas fa-times " />
        </label>
      </ul>
    </div>
  );
};
export default Navbar;
