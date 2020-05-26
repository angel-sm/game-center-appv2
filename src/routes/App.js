import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NewTournament from '../containers/NewTournament';
import DescriptionCard from '../components/SearchTournament/DescriptionCard';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={DescriptionCard} />
        <Route exact path='/tournaments/:id' component={Home} />
        <Route exact path='/new-tournament' component={NewTournament} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
