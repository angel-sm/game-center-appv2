import Home from '../Pages/Home';
import NewTournament from '../Pages/NewTournament';
import Player from '../Pages/Player';
import Tournament from '../Pages/Tournament';
import Season from '../Pages/Season';

const routes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: true ? Home : '',
    },
    {
      path: '/register-tournament',
      exact: true,
      component: true ? NewTournament : '',
    },
    {
      path: '/players',
      exact: true,
      component: true ? Player : '',
    },
    {
      path: '/seasons',
      exact: true,
      component: true ? Season : '',
    },
    {
      path: '/search-tournaments',
      exact: true,
      component: true ? Tournament : '',
    },
  ];
};

export default routes;
