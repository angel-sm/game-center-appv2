import Home from '../Pages/Home';
import NewTournament from '../Pages/NewTournament';

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
  ];
};

export default routes;
