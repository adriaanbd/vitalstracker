import {
  CREATE_VITAL,
  SET_CURRENT_USER,
  CREATE_USER,
  SET_VITALS,
} from './types';

export function createVitalAction(vital) {
  return {
    type: CREATE_VITAL,
    payload: vital,
  };
}

export function setVitals(vitals) {
  return {
    type: SET_VITALS,
    ...vitals,
  };
}


export function setCurrentUser(userData) {
  return {
    type: SET_CURRENT_USER,
    userData,
  };
}

export function createUserAction(userData) {
  return {
    type: CREATE_USER,
    userData,
  };
}
