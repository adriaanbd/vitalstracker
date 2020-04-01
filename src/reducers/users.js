import {
  LOGIN_USER_SUCCESS,
  CREATE_USER
} from '../actions/types';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return {
        user: payload,
        loading: false,
        error: null,
      };
    case CREATE_USER:
      return {
        user: payload,
      };
    default:
      return state;
  }
}
