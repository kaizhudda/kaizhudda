import React from 'react';
import Particles from 'react-particles-js';

import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <div className="HeroBanner row center-xs">
      <Particles
        className="particles"
        params={{
          "particles": {
            "number": {
              "value": 25
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
      <div className="content">
        <h1 className="name">Kaiz Hudda</h1>
        <h3 className="title">Front-End Developer</h3>
      </div>
    </div>
  );
}

export default HeroBanner;
