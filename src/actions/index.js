import {
  CREATE_VITAL,
} from '../actions/types';

export function createVital(vital) {
  // console.log('inside createVital action')
  // console.log('vital is', vital)
  return {
    type: CREATE_VITAL,
    payload: vital,
  };
}
