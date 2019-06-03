import React from 'react';

import './Experience.scss';

const Experience = ({ children, title, companyName, period, location, companyLink, skills }) => {
  return (
    <div className="Experience col-xl-5 col-lg-6 col-md-9 col-xs-12">
      <div className="company">
        <h2>{title}</h2>
        <h3>{companyName}</h3>
        <p><i className="far fa-clock"></i>{period}</p>
      </div>
      <div className="desc">
        <p className="about">
          {children}
      </p>
      <p className="skills">
        <strong>Key Technologies: </strong> 
        {skills}
      </p>
        <div className="icons">
          <span className="location"><i class="fas fa-map-marker-alt" />{location}</span>
          <a href={`${companyLink}`}> <i className="fas fa-link"></i>{companyLink}</a>
        </div>
      </div>
    </div>
  );
}

export default Experience; 
