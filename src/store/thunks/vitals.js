// import actions
// import api call

import sendRequest from '../../api/calls';
import { setVitals } from '../actions';

export default function fetchVitalsData(userId) {
  return async (dispatch) => {
    const path = `v1/users/${userId}vitals`;
    try {
      const res = await sendRequest('get', path);
      const vitals = await res.data;
      return dispatch(setVitals(vitals));
    } catch (error) {
      return error;
    }
  };
}