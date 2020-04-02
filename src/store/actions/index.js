import {
  CREATE_VITAL,
  SET_VITALS,
  LOGIN_USER_SUCCESS,
  CREATE_USER,
} from './types';

export default function createVital(vital) {
  return {
    type: CREATE_VITAL,
    payload: vital,
  };
}

export function setVitals(vitals) {
  return {
    type: SET_VITALS,
    payload: vitals,
  };
}


export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
}

export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: user,
  };
}
