import {
  SET_YESTERDAY_VITALS,
} from '../actions/types';


const INIT_STATE = [];

function yesterdayVitals(state = INIT_STATE, action) {
  const { type, payload } = action;
  console.log("yesterday vitals reducer payload =>", payload);
  switch (type) {
    case SET_YESTERDAY_VITALS:
      return action.vitals;
    default:
      return state;
  }
}

export default yesterdayVitals;