import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import SearchPlayerBar from '../components/SearchPlayerBar';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={SearchPlayerBar} />
        <Route exact path='/tournaments/:id' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
