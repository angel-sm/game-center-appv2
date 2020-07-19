/* eslint-disable handle-callback-err */
/* eslint-disable import/named */
import axios from 'axios';
import { signIn } from '../types';
import { setErrorRequest, setLoadRequest } from './status';

export const signInRequest = (payload) => ({
  type: signIn,
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
      dispatch(setLoadRequest(true));
    })
    .then(() => {
      window.location.href = url;
    })
    .catch((error) => {
      dispatch(setErrorRequest('Usuario o contraseña incorrectos'));
    });
};
