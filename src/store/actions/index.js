import {
  CREATE_VITAL,
  SET_VITALS,
  SET_CURRENT_USER,
  CREATE_USER,
} from './types';

export function createVitalAction(vital) {
  console.log("create vital action payload=>", vital);
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


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
}

export function createUserAction(user) {
  return {
    type: CREATE_USER,
    payload: user,
  };
}
