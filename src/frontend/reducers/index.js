import { combineReducers } from 'redux';
import auth from './auth';
import status from './status';
import pending from './pending';
import players from './players';
import prizes from './prizes';
import center from './center';
import tournaments from './tournaments';

export default combineReducers({
  auth,
  status,
  pending,
  players,
  prizes,
  center,
  tournaments,
});
