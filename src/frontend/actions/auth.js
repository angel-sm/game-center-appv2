/* eslint-disable handle-callback-err */
/* eslint-disable import/named */
import axios from 'axios';
import { SIGNIN } from '../types';
import { setErrorRequest, setLoadRequest } from './status';

export const signInRequest = (payload) => ({
  type: SIGNIN,
  payload,
});

export const signInSolve = ({ email, password }, url) => async (dispatch) => {
  axios({
    url: '/sign-in',
    method: 'POST',
    auth: {
      username: email,
      password,
    },
  })
    .then(({ data }) => {
      document.cookie = `USER=${data.userKey}`;
      document.cookie = `USERM=${data.email}`;
      document.cookie = `PENDINGSTEP=${0}`;
      dispatch(setLoadRequest(true));
    })
    .then(() => {
      window.location.href = url;
    })
    .catch((error) => {
      dispatch(setErrorRequest('Usuario o contraseña incorrectos'));
    });
};
