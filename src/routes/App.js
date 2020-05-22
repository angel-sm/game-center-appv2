import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Hello from '../components/Hello';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Hello} />
    </Switch>
  </BrowserRouter>
);

export default App;
