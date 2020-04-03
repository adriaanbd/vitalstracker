import {
  CREATE_VITAL,
  SET_TODAY_VITALS,
  SET_LAST_WEEK_VITALS,
  SET_YESTERDAY_VITALS,
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

export function setTodayVitals(vitals) {
  console.log("vitals from set vitals action =>", vitals);
  return {
    type: SET_TODAY_VITALS,
    vitals,
  };
}

export function setYesterdayVitals(vitals) {
  console.log("vitals from set vitals action =>", vitals);
  return {
    type: SET_YESTERDAY_VITALS,
    vitals,
  };
}

export function setLastWeekVitals(vitals) {
  console.log("vitals from set vitals action =>", vitals);
  return {
    type: SET_LAST_WEEK_VITALS,
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
