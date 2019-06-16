import React from 'react';
import { Helmet } from 'react-helmet';
import Routes from '../Router';
import Header from './header';

import './App.scss';

const App = () => {
  return (
    <div className="App row center-xs">
      <Helmet>
        <title>Kaiz Hudda - Front End React Developer - Digital Resume</title>
        <meta name="description" content="Hi, I'm Kaiz Hudda, a versatile Front-End React Developer with 3+ years of experience leveraging React, Redux and JavaScript to build commercial web-based applications. Focused on engineering user centric solutions for achieving greater customer satisfaction. Thrive in working in a collaborative agile environment to deliver high quality products." />
      </Helmet>
      <div className="col-xs-12">
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default App;
