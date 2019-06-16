import React from 'react';

import './Social.scss';

const Social = ({ className }) => {
  return (
    <p className={`Social ${className ? className : ''}`}>
      <a href=""><i className="fab fa-linkedin" /></a>
      <a href=""><i className="fab fa-github-square" /></a>
      <a href=""><i className="fab fa-twitter-square" /></a>
    </p>
  );
}

export default Social;
