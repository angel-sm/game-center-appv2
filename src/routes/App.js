import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import CompetitorsTable from '../components/NewTournament/CompetitorsTable';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={CompetitorsTable} />
        <Route exact path='/tournaments/:id' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
