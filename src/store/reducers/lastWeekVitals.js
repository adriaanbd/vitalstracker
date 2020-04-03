import {
  SET_LAST_WEEK_VITALS,
} from '../actions/types';


const INIT_STATE = [];

function lastWeekVitals(state = INIT_STATE, action) {
  const { type, payload } = action;
  console.log("last week vitals reducer payload =>", payload);
  switch (type) {
    case SET_LAST_WEEK_VITALS:
      return action.vitals;
    default:
      return state;
  }
}

export default lastWeekVitals;