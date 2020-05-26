import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NewTournament from '../containers/NewTournament';
import SearchTournament from '../containers/SearchTournament';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={SearchTournament} />
        <Route exact path='/tournaments/:id' component={Home} />
        <Route exact path='/new-tournament' component={NewTournament} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
