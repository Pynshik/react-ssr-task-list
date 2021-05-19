import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import {Provider} from 'react-redux';
import configureStore from './redux/store';

const state = window.__STATE__;

delete window.__STATE__;

const store = configureStore(state);

ReactDOM.hydrate(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
