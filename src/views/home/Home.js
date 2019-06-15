import React from 'react';
import HeroBanner from './heroBanner';
import Profile from './profile';
import Summary from './summary';
import Skills from './skills';
import Contact from './contact';

import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <HeroBanner />
      <Summary />
      <Profile />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
