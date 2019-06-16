import React from 'react';
import Title from '../../../sharedComponents/title';
import Social from '../../../sharedComponents/social';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="Contact row center-xs" id="contact-section">
      <Title className="title">Want to get in touch? Lets talk.</Title>
      <div className="profile-content col-xl-5 col-lg-6 col-md-9 col-sm-11 col-xs-12">
        <p className="email">
          kaiz.hudda@gmail.com
        </p>
        <Social />
      </div>
    </div>
  );
}

export default Contact;
