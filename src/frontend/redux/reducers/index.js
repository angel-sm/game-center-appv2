/* eslint-disable camelcase */
import { combineReducers } from 'redux';
import auth from './auth';
import tournaments from './tournaments';
import players from './players';

export default combineReducers({
  auth,
  players,
  tournaments,
});
