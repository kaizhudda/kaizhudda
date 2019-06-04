import React from 'react';
import Title from '../../../sharedComponents/title';
import Subtitle from '../../../sharedComponents/subtitle';

import './Summary.scss';

const Summary = () => {
  return (
    <div className="Summary row center-xs">
      <Title>Profile</Title>
      <Subtitle>I build things in the pixel aether</Subtitle>
      <div className="profile-content col-xl-5 col-lg-6 col-md-9 col-sm-11 col-xs-12">
        <div className="picture" />
        <p className="description">
          Hi, I'm Kaiz Hudda, a versatile Front-End Developer with 3+ years of experience leveraging React, Redux and
          JavaScript to build commercial web-based applications.
          Focused on engineering user centric solutions for achieving greater customer satisfaction.
          Thrive in working in a collaborative agile environment to deliver high quality products.
          <br /> <br />
          <i className="fa fa-map-marker-alt" /> <span className="location">Auckland, New Zealand</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
