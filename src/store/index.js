import React from 'react';
import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import summary from './ducks/summary';

const initalState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  summary
});

export default ({ children }) => {
  const store = createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};