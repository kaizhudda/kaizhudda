import React from 'react';
import HeroBanner from './heroBanner';
import Profile from './profile';
import Summary from './summary';

import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <HeroBanner />
      <Summary />
      <Profile />
    </div>
  );
}

export default Home;
