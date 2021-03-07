import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { ProtectedRoute } from './auth';

import NotFound from '../Pages/NotFound';
import { LoadingMainPage } from '../components/shared/LoadingMainPage';

const Home = React.lazy(() => import('../Pages/Home'));
const NewTournament = React.lazy(() => import('../Pages/NewTournament'));
const Layout = React.lazy(() => import('../components/Layout'));
const Player = React.lazy(() => import('../Pages/Player'));

const logged = (isLogged) => {
  return isLogged ? (
    <React.Suspense fallback={<LoadingMainPage />}>
      <Layout>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} isAuth={isLogged} />
          <ProtectedRoute exact path='/register-tournament' component={NewTournament} isAuth={isLogged} />
          <ProtectedRoute exact path='/players' component={Player} isAuth={isLogged} />
          <Route exact component={NotFound} />
        </Switch>
      </Layout>
    </React.Suspense>
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
