import React from 'react';

import './Subtitle.scss';

const Subtitle = ({ children }) => {
  return (
    <h3 className="Subtitle">
      {children}
    </h3>
  );
}

export default Subtitle;
