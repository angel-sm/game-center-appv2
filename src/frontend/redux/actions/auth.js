/* eslint-disable handle-callback-err */
/* eslint-disable import/named */
import axios from 'axios';
import { SIGNIN, LOGOUT } from '../../types';

export const signInRequest = (payload) => ({
  type: SIGNIN,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
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
      const [c] = data.center;
      document.cookie = `USER=${data.userKey}`;
      document.cookie = `USERM=${data.email}`;
      document.cookie = `PENDINGSTEP=${0}`;
      document.cookie = `CENTERID=${c.id}`;
      dispatch(setLoadRequest(true));
    })
    .then(() => {
      window.location.href = url;
    })
    .catch((error) => {
      dispatch(setErrorRequest('Usuario o contraseña incorrectos'));
    });
};
