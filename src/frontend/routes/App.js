import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { ProtectedRoute } from './auth';

//import Home from '../Pages/Home';
//import Layout from '../components/Layout';
import NotFound from '../Pages/NotFound';
import { LoadPage } from '../components/shared/LoadPage';
//import NewTournament from '../Pages/NewTournament';

const Home = React.lazy(() => import('../Pages/Home'));
const NewTournament = React.lazy(() => import('../Pages/NewTournament'));
const Layout = React.lazy(() => import('../components/Layout'));

const logged = (isLogged) => {
  return isLogged ? (
    <React.Suspense fallback={<LoadPage />}>
      <Layout>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} isAuth={isLogged} />
          <ProtectedRoute exact path='/register-tournament' component={NewTournament} isAuth={isLogged} />

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
