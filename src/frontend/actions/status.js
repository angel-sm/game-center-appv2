/* eslint-disable import/named */
import { ERROR, LOAD } from '../types';

const setErrorRequest = (payload) => ({
  type: ERROR,
  payload,
});

const setLoadRequest = (payload) => ({
  type: LOAD,
  payload,
});

export { setErrorRequest, setLoadRequest };

