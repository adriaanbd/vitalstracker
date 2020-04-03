import sendRequest from '../../api/calls';
import {
  setTodayVitals,
  setYesterdayVitals,
  setLastWeekVitals,
  createVitalAction,
} from '../actions';


export function fetchVitalsData(userId, day = null) {
  day = day.toLowerCase();
  return async (dispatch) => {
    const path = `v1/users/${userId}/vitals?day=${day}`;
    try {
      const res = await sendRequest('get', path);
      const vitals = await res.data;
      console.log("vitals from thunk", vitals);
      switch (day) {
        case 'today':
          return dispatch(setTodayVitals(vitals));
        case 'yesterday':
          return dispatch(setYesterdayVitals(vitals));
        case 'last_week':
          return dispatch(setLastWeekVitals(vitals));
        default:
          return null;
      }
    } catch (error) {
      return error;
    }
  };
}

export function createVital(userId, vitalData) {
  return async () => {
    const path = `v1/users/${userId}/vitals`;
    try {
      const resp = await sendRequest('post', path, vitalData);
      const vital = await resp.data;
      return vital;
    } catch (error) {
      return error;
    }
  };
}