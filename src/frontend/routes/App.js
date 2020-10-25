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
    exact: true,
    component: Home,
  },
  {
    path: '/credit',
    exact: true,
    component: CreditStore,
  },
  {
    path: '/registertournament',
    exact: true,
    component: NewTournament,
  },
  {
    path: '/tournaments/:id',
    exact: false,
    component: TournamentView,
  },
  {
    path: '/players',
    exact: true,
    component: Players,
  },
  {
    path: '/search-tournaments',
    exact: true,
    component: SearchTournaments,
  },
  {
    path: '/config-points',
    exact: true,
    component: ConfigPts,
  },
  {
    exact: true,
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
