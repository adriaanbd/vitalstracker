import {
  CREATE_VITAL,
  LOAD_VITALS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from './types';

export default function createVital(vital) {
  return {
    type: CREATE_VITAL,
    payload: vital,
  };
}

export function loadVitals(vitals) {
  return {
    type: LOAD_VITALS,
    payload: vitals,
  };
}

export function loginUserBegin() {
  return {
    type: LOGIN_USER_BEGIN,
  };
}

export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
}

export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
}