import sendRequest from '../../utils/api';
import { setCurrentUser, createUserAction } from '../actions/index';

export function fetchUser(username) {
  return async dispatch => {
    const path = 'v1/sessions/';
    try {
      const res = await sendRequest('post', path, { username });
      if (res.status === 201) {
        const userData = await res.data;
        sessionStorage.setItem('userId', userData.id);
        sessionStorage.setItem('username', userData.username);
        dispatch(setCurrentUser(userData));
      }
      return res.status;
    } catch (error) {
      return error.response;
    }
  };
}

export function createUser(username) {
  return async dispatch => {
    const path = 'v1/users/';
    try {
      const res = await sendRequest('post', path, { username });
      if (res.status === 201) {
        const userData = await res.data;
        sessionStorage.setItem('userId', userData.id);
        sessionStorage.setItem('username', userData.username);
        dispatch(createUserAction(userData));
      }
      return res.status;
    } catch (error) {
      return error.response;
    }
  };
}
