import {
  CREATE_VITAL,
} from './types';

export default function createVital(vital) {
  return {
    type: CREATE_VITAL,
    payload: vital,
  };
}
