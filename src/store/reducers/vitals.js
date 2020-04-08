import {
  CREATE_VITAL,
  SET_VITALS,
} from '../actions/types';


const INIT_STATE = {};

function setVitals(state = INIT_STATE, action) {
  const { type, vitals } = action;
  switch (type) {
    case CREATE_VITAL:
      return [...state, action];
    case SET_VITALS:
      return { ...vitals };
    default:
      return state;
  }
}

export default setVitals;
