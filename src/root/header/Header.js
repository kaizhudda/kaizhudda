import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link, animateScroll as scroll } from "react-scroll";

import './Header.scss';

const Header = () => {
  return (
    <div className="row">
      <div className="nav">
        <header className="header">
          {/* <Link to='/'><div className="logo" /></Link> */}
          <ul className="main-nav">
            <li>
              <Link
                to="summary-section"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>
                  Profile
                </Link>
              </li>
              <li>
              <Link
                to="experience-section"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>
                  Experience
                </Link>
              </li>
              <li>
              <Link
                to="skills-section"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>
                  Skills
                </Link>
              </li>
              <li>
              <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}>
                  Contact
                </Link>
              </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header; 
