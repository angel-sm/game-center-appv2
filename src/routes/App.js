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
import PlayerForm from '../components/Players/PlayerForm';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={PlayerForm} />
        <Route exact path='/tournaments/:id' component={Home} />
        <Route exact path='/new-tournament' component={NewTournament} />
        <Route exact path='/search' component={SearchTournament} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
