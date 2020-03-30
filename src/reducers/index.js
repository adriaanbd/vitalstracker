import { combineReducers } from 'redux';
import vitals from './vitals';

const rootReducer = combineReducers({
  vitals,
});

export default rootReducer;