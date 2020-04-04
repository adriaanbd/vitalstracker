import {
  SET_YESTERDAY_VITALS,
} from '../actions/types';


const INIT_STATE = [];

function yesterdayVitals(state = INIT_STATE, action) {
  const { type } = action;
  switch (type) {
    case SET_YESTERDAY_VITALS:
      return action.vitals;
    default:
      return state;
  }
}

export default yesterdayVitals;