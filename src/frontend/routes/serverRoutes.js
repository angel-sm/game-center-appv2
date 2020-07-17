import Home from '../containers/Home';
import SearchTournament from '../containers/SearchTournament';
import Credit from '../containers/Credit';
import Players from '../containers/Players';
import SignIn from '../containers/SignIn';
import Centers from '../containers/Centers';

const routes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: isLogged ? Home : SignIn,
    },
    {
      path: '/tournament/:id',
      exact: true,
      component: isLogged ? Home : SignIn,
    },
    {
      path: '/sign-in',
      exact: true,
      component: isLogged ? Home : SignIn,
    },
    {
      path: '/credit',
      exact: true,
      component: isLogged ? Credit : SignIn,
    },
    {
      path: '/search',
      exact: true,
      component: isLogged ? SearchTournament : SignIn,
    },
    {
      path: '/players',
      exact: true,
      component: isLogged ? Players : SignIn,
    },
    {
      path: '/centers',
      exact: true,
      component: isLogged ? Centers : SignIn,
    },
  ];
};

export default routes;
