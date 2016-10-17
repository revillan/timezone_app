import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app_container.js';

export const Root = ({ store }) => (
  <Provider store={store}>

    <App/>
  </Provider>
);
