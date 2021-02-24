import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { ProtectedRoute } from './auth';

import Home from '../Pages/Home';
import Layout from '../components/Layout';
import NotFound from '../Pages/NotFound';
import NewTournament from '../Pages/NewTournament';

const logged = (isLogged) => {
  return isLogged ? (
    <Layout>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} isAuth={isLogged} />
        <ProtectedRoute exact path='/register-tournament' component={NewTournament} isAuth={isLogged} />

        <Route exact component={NotFound} />
      </Switch>
    </Layout>
  ) :
    (
      <Switch>
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
