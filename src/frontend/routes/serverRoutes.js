import Home from '../containers/Home';
import SearchTournament from '../containers/SearchTournament';
import Credit from '../containers/Credit';
import Players from '../containers/Players';
import SignIn from '../containers/SignIn';

const routes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: isLogged ? Home : SignIn,
    },
    {
      path: '/credit',
      exact: true,
      component: Credit,
    },
    {
      path: '/search',
      exact: true,
      component: SearchTournament,
    },
    {
      path: '/players',
      exact: true,
      component: Players,
    },
  ];
};

export default routes;
