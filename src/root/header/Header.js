import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Header.scss';

const Header = () => {
  return (
    <div className="row">
      <div className="nav">
        <header className="header">
          {/* <Link to='/'><div className="logo" /></Link> */}
          <ul className="main-nav">
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/">Experience</Link></li>
            <li><Link to="/about">Skills</Link></li>
            <li><Link to="/about">Contact</Link></li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header; 
