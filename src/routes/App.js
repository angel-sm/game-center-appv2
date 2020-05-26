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
import PlayersForm from '../components/Players/DataPlayerForm';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={PlayersForm} />
        <Route exact path='/tournaments/:id' component={Home} />
        <Route exact path='/new-tournament' component={NewTournament} />
        <Route exact path='/search' component={SearchTournament} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
