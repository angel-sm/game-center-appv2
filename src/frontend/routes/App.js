import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import SearchTournament from '../containers/SearchTournament';
import Credit from '../containers/Credit';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={SearchTournament} />
        <Route exact path='/credit' component={Credit} />

      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
