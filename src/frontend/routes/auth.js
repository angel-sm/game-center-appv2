/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-indent */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        (props) => {
          if (isAuth) {
            return <Component />;
          }
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
      }
    />
  );
};
