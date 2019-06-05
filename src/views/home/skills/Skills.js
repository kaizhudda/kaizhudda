import React from 'react';
import Title from '../../../sharedComponents/title';
import Subtitle from '../../../sharedComponents/subtitle';
import SecondaryTitle from '../../../sharedComponents/secondary-title'

import './Skills.scss';

const Skills = () => {
  return (
    <div className="Skills row center-xs">
      <Title>Skills</Title>
      <Subtitle></Subtitle>
      <div className="skills-content col-xs-12">
        <SecondaryTitle>Front-End Skills</SecondaryTitle>
        <div className="skill">
          <div className="skill-title">HTML5 (10+ years)</div>
          <div className="skill-score">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>

        <div className="skill">
          <div className="skill-title">CSS3 (10+ years)</div>
          <div className="skill-score">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>

        <div className="skill">
          <div className="skill-title">Javascript ES6 (8 years)</div>
          <div className="skill-score">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>

        <div className="skill">
          <div className="skill-title">React.js (3 years)</div>
          <div className="skill-score">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>

        <div className="skill">
          <div className="skill-title">Redux (3 years)</div>
          <div className="skill-score">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </div>
        </div>

        <div className="skill">
          <div className="skill-title">SASS (3 years)</div>
          <div className="skill-score">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </div>
        </div>

        <div className="skill">
          <div className="skill-title">Node.js (3 years)</div>
          <div className="skill-score">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </div>
        </div>

        <div className="skill">
          <div className="skill-title">Styled Components (1 year)</div>
          <div className="skill-score">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
