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
import TournamentInfo from '../containers/TournamentInfo';

const loggedRoutes = [
  {
    path: '/registertournament',
    exact: true,
    component: NewTournament,
  },
  {
    path: '/tournaments/:id',
    exact: true,
    component: TournamentInfo,
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
          loggedRoutes.map((r) => <Route key={r.path} exact path={r.path} component={r.component} />)
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
