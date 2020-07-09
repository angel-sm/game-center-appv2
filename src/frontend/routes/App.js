import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import SignIn from '../containers/SignIn';
import SearchTournament from '../containers/SearchTournament';
import Credit from '../containers/Credit';
import Players from '../containers/Players';
import Center from '../containers/Centers';

const loggedRoutes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/search',
    component: SearchTournament,
  },
  {
    path: '/credit',
    component: Credit,
  },
  {
    path: '/players',
    component: Players,
  },
];

const logged = ({ isLogged }) => {
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
        <Route exact path='/centers' component={Center} />
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
