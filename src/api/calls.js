import axios from 'axios';
import { loginEndpoint } from './endpoints';
import { loginUserSuccess, loginUserBegin, loginUserFailure } from '../actions/index';

export default async function createSession(userData, dispatch) {
  try {
    dispatch(loginUserBegin());
    const resp = await axios.post(loginEndpoint, { ...userData });
    if (resp.status === 201) {
      dispatch(loginUserSuccess({ ...resp.data }));
      localStorage.setItem('username', resp.data.username);
    }
  } catch (error) {
    dispatch(loginUserFailure(error));
  }
}
