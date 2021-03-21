import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav__link");
    const navLinks = document.querySelectorAll(".nav__link li");
    burger?.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      //animation
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
    });
  };

  return (
    <div className="nav ">
      <nav className="fix__top">
        <div onClick={navSlide} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="logo">
          <h4> 🎅 Potfolio</h4>
        </div>
        <ul className="nav__link">
          <li>
            <NavLink exact activeClassName="active_class" to="/">
              Home
            </NavLink>
            {/* <a href="#"> Home</a> */}
          </li>

          <li>
            <NavLink exact activeClassName="active_class" to="/About">
              About
            </NavLink>
            {/* <a href="#one">About</a> */}
          </li>
          <li>
            <NavLink exact activeClassName="active_class" to="Services">
              Services
            </NavLink>
            {/* <a href="#">Services </a> */}
          </li>
          <li>
            <NavLink exact activeClassName="active_class" to="/Skill">
              Skills
            </NavLink>
            {/* <a href="#">Skills</a> */}
          </li>
          <li>
            <NavLink exact activeClassName="active_class" to="/Blog">
              Blog
            </NavLink>
            {/* <a href="#">Project</a> */}
          </li>
          <li>
            <NavLink exact activeClassName="active_class" to="/Contact">
              Contact
            </NavLink>
            {/* <a href="">Contact</a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
