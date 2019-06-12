import React, { useEffect } from 'react';
import Title from '../../../sharedComponents/title';
import Subtitle from '../../../sharedComponents/subtitle';

import './Summary.scss';

const Summary = ({ fetchSummary, summaryData }) => {
  useEffect(() => {
    fetchSummary();
  }, [fetchSummary])

  return (
    <div className="Summary row center-xs">
      <Title>Profile</Title>
      <Subtitle>
        {
          summaryData &&
          summaryData.fields.subtitle
        }
      </Subtitle>
      <div className="profile-content col-xl-5 col-lg-6 col-md-9 col-sm-11 col-xs-12">
        <div className="picture" />
        <p className="description">
          {
            summaryData &&
            summaryData.fields.description
          }
          <br /> <br />
          <i className="fa fa-map-marker-alt" /> <span className="location">
            {
              summaryData &&
              summaryData.fields.location
            }
          </span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
