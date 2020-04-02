import {
  CREATE_VITAL,
  SET_VITALS,
} from '../actions/types';


const INIT_STATE = {
  vitals: [],
  loading: false,
  error: null,
};

function vitals(state = INIT_STATE, action) {
  const { type, payload } = action;
  console.log("vitals reducer payload =>", payload);
  switch (type) {
    case CREATE_VITAL:
      return {
        ...state,
        vitals: [...state.vitals, payload],
      };
    case SET_VITALS:
      return {
        vitals: payload,
      };
    default:
      return state;
  }
}

export default vitals;