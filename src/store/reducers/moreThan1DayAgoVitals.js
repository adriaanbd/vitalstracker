import {
  SET_MORE_THAN_1_DAY_AGO_VITALS,
} from '../actions/types';


const INIT_STATE = [];

function moreThan1DayAgoVitals(state = INIT_STATE, action) {
  const { type } = action;
  switch (type) {
    case SET_MORE_THAN_1_DAY_AGO_VITALS:
      return action.vitals;
    default:
      return state;
  }
}

export default moreThan1DayAgoVitals;
