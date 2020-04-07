import sendRequest from '../../utils/api';
import {
  setTodayVitals,
  setYesterdayVitals,
  setMoreThan1DayAgoVitals,
} from '../actions';


export function fetchVitalsData(userId, day = null) {
  const DAY = day.toLowerCase();
  return async dispatch => {
    const path = `v1/users/${userId}/vitals?day=${DAY}`;
    try {
      const res = await sendRequest('get', path);
      const vitals = await res.data;
      switch (DAY) {
        case 'today':
          return dispatch(setTodayVitals(vitals));
        case 'yesterday':
          return dispatch(setYesterdayVitals(vitals));
        case 'more_than_1_day_ago':
          return dispatch(setMoreThan1DayAgoVitals(vitals));
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
