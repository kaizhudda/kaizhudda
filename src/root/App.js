import React from 'react';
import Routes from '../Router';
import Header from './header';

import './App.scss';

const App = () => {
  return (
    <div className="App row center-xs">
      <div className="col-xs-12">
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default App;
