import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NewTournament from '../containers/NewTournament';
import SearchTournamentTable from '../components/SearchTournament/SearchTournamentTable';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={SearchTournamentTable} />
        <Route exact path='/tournaments/:id' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
