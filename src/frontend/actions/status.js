/* eslint-disable import/named */
import { setError, setLoad } from '../types';

const setErrorRequest = (payload) => ({
  type: setError,
  payload,
});

const setLoadRequest = (payload) => ({
  type: setLoad,
  payload,
});

export { setErrorRequest, setLoadRequest };

