import SignIn from '../containers/SignIn';

const routes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: isLogged ? Home : SignIn,
    },
  ];
};

export default routes;
