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
import Centers from '../containers/Centers';

const loggedRoutes = [
  {
    path: '/',
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
  {
    path: '/centers',
    component: Centers,
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
