import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import history from './history';
import { Router } from 'react-router-dom';
import App from './root/App';

ReactDOM.render(
  <Router history={history}>
    <Store>
      <App />
    </Store>
  </Router>,
  document.getElementById('root')
);
