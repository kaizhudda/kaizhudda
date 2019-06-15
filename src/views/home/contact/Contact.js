import React from 'react';
import Title from '../../../sharedComponents/title';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="Contact row center-xs">
      <Title>Want to get in touch? Lets talk.</Title>
      <div className="profile-content col-xl-5 col-lg-6 col-md-9 col-sm-11 col-xs-12">
        <p className="email">
          kaiz.hudda@gmail.com
        </p>
        <p>
          <a href=""><i className="fab fa-linkedin" /></a>
          <a href=""><i className="fab fa-github-square" /></a>
          <a href=""><i className="fab fa-twitter-square" /></a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
