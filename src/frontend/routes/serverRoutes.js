import SignIn from '../containers/SignIn';
import NotFound from '../containers/NotFound';
import NewTournament from '../containers/NewTournament';
import TournamentView from '../containers/TournamentView';
import Players from '../containers/Players';
import SearchTournaments from '../containers/SearchTournaments';
import Home from '../containers/Home';
import ConfigPts from '../containers/ConfigPts';
import CreditStore from '../containers/CreditStore';

const routes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: isLogged ? Home : SignIn,
    },
    {
      path: '/registertournament',
      exact: true,
      component: NewTournament,
    },
    {
      path: '/credit',
      exact: true,
      component: CreditStore,
    },
    {
      path: '/tournaments/:id',
      exact: false,
      component: TournamentView,
    },
    {
      path: '/players',
      exact: true,
      component: Players,
    },
    {
      path: '/search-tournaments',
      exact: true,
      component: SearchTournaments,
    },
    {
      path: '/config-points',
      exact: true,
      component: ConfigPts,
    },
    {
      exact: true,
      component: NotFound,
    },
  ];
};

export default routes;
