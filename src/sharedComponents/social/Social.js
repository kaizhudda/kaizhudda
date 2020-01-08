import React from 'react';

import './Social.scss';

const Social = ({ className }) => {
  return (
    <p className={`Social ${className ? className : ''}`}>
      <a href="https://linkedin.com/in/kaizhudda" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
      <a href="https://github.com/kaizhudda" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
      <a href="https://twitter.com/kaizhudda" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square" /></a>
      <a href="https://medium.com/@kaiz.hudda" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium" /></a>
    </p>
  );
}

export default Social;
