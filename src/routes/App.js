import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import CompetitorsTable from '../components/CompetitorsTable';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={CompetitorsTable} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
