import sendRequest from '../../api/calls';
import { setCurrentUser, createUserAction } from '../actions/index';

export function fetchUser(username) {
  return async (dispatch) => {
    const path = 'v1/sessions/';
    try {
      const res = await sendRequest('post', path, username);
      const userData = await res.data;
      return dispatch(setCurrentUser(userData));
    } catch (error) {
      return error;
    }
  };
}

export function createUser(username) {
  return async (dispatch) => {
    const path = 'v1/users/';
    try {
      const res = await sendRequest('post', path, username);
      const userData = await res.data;
      return dispatch(createUserAction(userData));
    } catch (error) {
      return error;
    }
  };
}