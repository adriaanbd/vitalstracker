import {
  CREATE_VITAL,
} from '../actions/types';


const INIT_STATE = {
  vitals: [],
  loading: false,
  error: null,
};

function vitals(state = INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_VITAL:
      return {
        ...state,
        vitals: [...state.vitals, payload],
      };
    default:
      return state;
  }
}

export default vitals;