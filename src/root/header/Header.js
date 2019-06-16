import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Header.scss';

const Header = () => {
  return (
    <div className="row">
      <div className="nav">
        <header className="header">
          <Link to='/'><div className="logo" /></Link>
          <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li>
              <div class="dropdown">
                <Link class="dropbtn" to="/services">Services <i className="fa fa-chevron-down"></i></Link>
                <div class="dropdown-content">
                  <Link to="/services#commercial">Commercial</Link>
                  <Link to="/services#domestic">Domestic</Link>
                </div>
              </div>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link className="button" to="/contact">Contact</Link></li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header; 
