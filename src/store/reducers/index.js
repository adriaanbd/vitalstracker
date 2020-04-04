import { combineReducers } from 'redux';
import todayVitals from './todayVitals';
import yesterdayVitals from './yesterdayVitals';
import moreThan1DayAgoVitals from './moreThan1DayAgoVitals';
import users from './users';

const rootReducer = combineReducers({
  todayVitals,
  yesterdayVitals,
  moreThan1DayAgoVitals,
  users,
});

export default rootReducer;
