import axios from 'axios';
import { loginEndpoint } from './endpoints';
import { loginUserSuccess, loginUserBegin, loginUserFailure } from '../store/actions/index';

const BASE_URL = 'https://lychee-cake-00846.herokuapp.com/';

// send request function => args: method, path and data
export default async function sendRequest(method, path, data) {
  const resp = await axios[method](`${BASE_URL}/${path}`, { ...data });
  return resp;
}
