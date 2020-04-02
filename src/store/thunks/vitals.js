import sendRequest from '../../api/calls';
import { setVitals, createVitalAction } from '../actions';


export function fetchVitalsData(userId) {
  return async (dispatch) => {
    const path = `v1/users/${userId}/vitals`;
    try {
      const res = await sendRequest('get', path);
      const vitals = await res.data;
      return dispatch(setVitals(vitals));
    } catch (error) {
      return error;
    }
  };
}

export function createVital(userId, vitalData) {
  return async (dispatch) => {
    const path = `v1/users/${userId}/vitals`;
    try {
      const resp = await sendRequest('post', path, vitalData);
      const vital = await resp.data;
      return dispatch(createVitalAction(vital));
    } catch (error) {
      return error;
    }
  };
}