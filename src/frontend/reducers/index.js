import { combineReducers } from 'redux';
import auth from './auth';
import status from './status';
import pending from './pending';
import players from './players';
import competitors from './competitors';
import prizes from './prizes';

export default combineReducers({
  auth,
  status,
  pending,
  players,
  competitors,
  prizes,
});
