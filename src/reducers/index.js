import { combineReducers } from 'redux';
import vitals from './vitals';
import users from './users';

const rootReducer = combineReducers({
  vitals,
  users,
});

export default rootReducer;