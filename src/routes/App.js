import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Layout} />
  </BrowserRouter>
);

export default App;
