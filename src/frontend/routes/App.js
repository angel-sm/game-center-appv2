import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import SignIn from '../containers/SignIn';
import NotFound from '../containers/NotFound';
import NewTournament from '../containers/NewTournament';
import TournamentView from '../containers/TournamentView';
import Players from '../containers/Players';
import SearchTournaments from '../containers/SearchTournaments';
import Home from '../containers/Home';
import ConfigPts from '../containers/ConfigPts';
import CreditStore from '../containers/CreditStore';

const loggedRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/credit',
    component: CreditStore,
  },
  {
    path: '/registertournament',
    component: NewTournament,
  },
  {
    path: '/tournaments/:id',
    exact: false,
    component: TournamentView,
  },
  {
    path: '/players',
    component: Players,
  },
  {
    path: '/search-tournaments',
    component: SearchTournaments,
  },
  {
    path: '/config-points',
    component: ConfigPts,
  },
  {
    component: NotFound,
  },
];

const logged = (isLogged) => {
  return isLogged ? (
    <Layout>
      <Switch>
        {
          loggedRoutes.map((r) => <Route key={r.component} exact path={r.path} component={r.component} />)
        }
      </Switch>
    </Layout>
  ) :
    (
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact component={NotFound} />
      </Switch>
    );
};

const App = ({ isLogged }) => (

  <BrowserRouter>
    {
      logged(isLogged)
    }
  </BrowserRouter>
);

export default App;
