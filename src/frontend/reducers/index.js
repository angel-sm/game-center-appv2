import { combineReducers } from 'redux';
import auth from './auth';
import states from './states';

export default combineReducers({
  auth,
  states,
});
