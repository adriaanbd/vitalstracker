import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions/types';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        user: payload,
        loading: false,
        error: null,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
}
