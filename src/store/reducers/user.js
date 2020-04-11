import {
  SET_CURRENT_USER,
  CREATE_USER,
} from '../actions/types';

export default function user(state = {}, action) {
  const { type, userData } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...userData,
      };
    case CREATE_USER:
      return {
        ...userData,
      };
    default:
      return state;
  }
}
