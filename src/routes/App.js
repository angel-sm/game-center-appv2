import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NewTournament from '../containers/NewTournament';
import LastTournamentsTable from '../components/SearchTournament/LastTournamentsTable';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={LastTournamentsTable} />
        <Route exact path='/tournaments/:id' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
