import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './routes/App';
import reducers from './reducers';

const initialState = {
  user: {},
  userData: {},
  center: {},
  competitors: [],
  tournaments: [],
  seasons: [],
};

const store = createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App'),
);
