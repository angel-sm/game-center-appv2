import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Hello from '../components/Hello';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Hello} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
