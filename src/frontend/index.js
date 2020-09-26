/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import thunk from 'redux-thunk';
import App from './routes/App';
import reducer from './reducers';

import './assets/styles/styles.scss';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

// To client dont have acces
delete window.__PRELOADED_STATE__;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App isLogged={(preloadedState.auth.user.email && preloadedState.auth.user.id && preloadedState.auth.user.email !== undefined && preloadedState.auth.user.id !== undefined && preloadedState.auth.user.id.length === 24)} />
    </Router>
  </Provider>,
  document.getElementById('App'),
);
