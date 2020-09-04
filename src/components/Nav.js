import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PATHS from "../constants/AppRoute";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Review from "./Pages/Review";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar__brand-title">
        <NavLink to={"/"}> FOUR ATE FIVE </NavLink>
      </div>
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div className="navicon"> </div>
      </div>
      <div className="navbar__links ">
        <ul className="navbar__list">
          <Link
            className="navbar__link"
            activeClass="navbar__current"
            to="landingPage"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            HOME
          </Link>
          <Link
            className="navbar__link"
            activeClass="navbar__current"
            to="menu"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            MENU
          </Link>
          <Link
            className="navbar__link"
            activeClass="navbar__current"
            to="aboutPage"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            ABOUT US
          </Link>
          <Link
            className="navbar__link"
            activeClass="navbar__current"
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            CONTACT US
          </Link>
          {/* <NavLink
            className="navbar__link"
            activeClassName="navbar__current"
            to="/review"
          >
            Skill
          </NavLink> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
