import SignIn from '../containers/SignIn';
import NotFound from '../containers/NotFound';
import NewTournament from '../containers/NewTournament';
import TournamentInfo from '../containers/TournamentInfo';

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
      path: '/tournaments/:id',
      exact: true,
      component: TournamentInfo,
    },
    {
      exact: true,
      component: NotFound,
    },
  ];
};

export default routes;
