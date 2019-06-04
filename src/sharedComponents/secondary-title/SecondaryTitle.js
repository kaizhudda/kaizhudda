import React from 'react';

import './SecondaryTitle.scss';

const SecondaryTitle = ({ children }) => {
  return (
    <h3 className="SecondaryTitle col-xl-5 col-lg-6 col-md-9 col-xs-12">
      {children}
    </h3>
  );
}

export default SecondaryTitle;
