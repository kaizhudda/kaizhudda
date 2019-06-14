import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import App from './root/App';

ReactDOM.render(
  <Store>
    <App />
  </Store>, 
  document.getElementById('root')
);
