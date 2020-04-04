import {
  CREATE_VITAL,
  SET_TODAY_VITALS,
  SET_MORE_THAN_1_DAY_AGO_VITALS,
  SET_YESTERDAY_VITALS,
  SET_CURRENT_USER,
  CREATE_USER,
} from './types';

export function createVitalAction(vital) {
  return {
    type: CREATE_VITAL,
    payload: vital,
  };
}

export function setTodayVitals(vitals) {
  return {
    type: SET_TODAY_VITALS,
    vitals,
  };
}

export function setYesterdayVitals(vitals) {
  return {
    type: SET_YESTERDAY_VITALS,
    vitals,
  };
}

export function setMoreThan1DayAgoVitals(vitals) {
  return {
    type: SET_MORE_THAN_1_DAY_AGO_VITALS,
    vitals,
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
