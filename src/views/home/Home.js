import React from 'react';
import HeroBanner from './heroBanner';
import Profile from './profile';

import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <HeroBanner />
      <Profile />
    </div>
  );
}

export default Home;
