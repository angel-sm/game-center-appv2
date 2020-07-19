import SignIn from '../containers/SignIn';
import NotFound from '../containers/NotFound';

const routes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: isLogged ? NotFound : SignIn,
    },
    {
      exact: true,
      component: NotFound,
    },
  ];
};

export default routes;
