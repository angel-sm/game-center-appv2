/* eslint-disable import/named */
import axios from 'axios';
import {
  signIn,
} from '../types/index';

export const signInRequest = (payload) => ({
  type: signIn,
  payload,
});

export const signInSolve = ({ email, password }, url) => (dispatch) => {
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
      dispatch(signInRequest(data));
      window.location.href = url;
    })
    /*.then(() => {
      window.location.href = url;
    })*/
    .catch((error) => {
      console.log(error);
    });
};
