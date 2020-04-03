import { combineReducers } from 'redux';
import todayVitals from './todayVitals';
import yesterdayVitals from './yesterdayVitals';
import lastWeekVitals from './lastWeekVitals';
import users from './users';

const rootReducer = combineReducers({
  todayVitals,
  yesterdayVitals,
  lastWeekVitals,
  users,
});

export default rootReducer;