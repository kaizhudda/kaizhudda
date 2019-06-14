import React from 'react';
import SecondaryTitle from '../../../../sharedComponents/secondary-title'

import './Skill.scss';

const Skill = ({ skills, category }) => {
  return (
    <div className="Skills-content col-xs-12">
      <SecondaryTitle>{category}</SecondaryTitle>
      {
        skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-title">{skill.name}</div>
            <div className="skill-score">{skill.experience}</div>
          </div>
        ))
      }

    </div>
  );
}

export default Skill; 
