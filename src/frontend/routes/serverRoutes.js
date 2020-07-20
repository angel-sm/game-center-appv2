import SignIn from '../containers/SignIn';
import NotFound from '../containers/NotFound';
import NewTournament from '../containers/NewTournament';

const routes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: isLogged ? NotFound : SignIn,
    },
    {
      path: '/registertournament',
      exact: true,
      component: NewTournament,
    },
    {
      exact: true,
      component: NotFound,
    },
  ];
};

export default routes;
