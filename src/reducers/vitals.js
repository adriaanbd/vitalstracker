import {
  CREATE_VITAL,
} from '../actions/types';


const INIT_STATE = {
  vitals: {},
  loading: false,
  error: null,
};

function vitals(state = INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_VITAL:
      console.log('inside vitals, state is:', state);
      console.log('inside vitals, payload is:', payload);
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
}

export default vitals;