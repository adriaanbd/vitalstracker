import { combineReducers } from 'redux';
import todayVitals from './todayVitals';
import yesterdayVitals from './yesterdayVitals';
import moreThan1DayAgoVitals from './moreThan1DayAgoVitals';
import user from './user';

const rootReducer = combineReducers({
  todayVitals,
  yesterdayVitals,
  moreThan1DayAgoVitals,
  user,
});

export default rootReducer;
