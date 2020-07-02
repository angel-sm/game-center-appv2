import Home from '../containers/Home';
import SearchTournament from '../containers/SearchTournament';
import Credit from '../containers/Credit';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
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
];

export default routes;
