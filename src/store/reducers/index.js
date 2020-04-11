import { combineReducers } from 'redux';
import vitals from './vitals';

import user from './user';

const rootReducer = combineReducers({
  vitals,
  user,
});

export default rootReducer;
