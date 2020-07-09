import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import App from './routes/App';
import reducer from './reducers';

import './assets/styles/styles.scss';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED__STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers());
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

// To client dont have acces
delete window.__PRELOADED__STATE__;

renderMethod(
  <Provider store={store}>
    <Router history={history}>
      <App isLogged='false' />
    </Router>
  </Provider>,
  document.getElementById('App'),
);
