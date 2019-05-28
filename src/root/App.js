import React from 'react';
import Home from '../views/home';

import './App.scss';

const App = () => {
  return (
    <div className="App row center-xs">
      <div className="col-xs-12">
        Kaiz Hudda App
        <Home />
      </div>
    </div>
  );
}

export default App;
