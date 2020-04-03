import {
  CREATE_VITAL,
  SET_TODAY_VITALS,
} from '../actions/types';


const INIT_STATE = [];

function todayVitals(state = INIT_STATE, action) {
  const { type } = action;
  switch (type) {
    case CREATE_VITAL:
      return [...state, action];
    case SET_TODAY_VITALS:
      return action.vitals;
    default:
      return state;
  }
}

export default todayVitals;