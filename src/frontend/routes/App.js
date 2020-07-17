import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import SignIn from '../containers/SignIn';

const loggedRoutes = [
  {
    exact: true,
    component: Home,
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
