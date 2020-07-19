/* eslint-disable import/named */
import { setError } from '../types';

const setErrorRequest = (payload) => ({
  type: setError,
  payload,
});

export default setErrorRequest;

