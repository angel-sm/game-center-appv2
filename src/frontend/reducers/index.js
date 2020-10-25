import { combineReducers } from 'redux';
import auth from './auth';
import status from './status';
import pending from './pending';
import players from './players';
import center from './center';
import tournaments from './tournaments';
import games from './games';
import seasons from './seasons';
import sales from './sales';

export default combineReducers({
  auth,
  status,
  pending,
  players,
  center,
  tournaments,
  games,
  seasons,
  sales,
});
