import axios from 'axios';

const HEROKU_BASE_URL = 'http://lychee-cake-00846.herokuapp.com';
// const LOCAL_BASE_URL = 'http://127.0.0.1:8000';

export default async function sendRequest(method, path, data) {
  // const url = `${LOCAL_BASE_URL}/${path}`;
  const URL = `${HEROKU_BASE_URL}/${path}`;
  const HEADERS = {
    Accept: 'application/json, text/plain, */*',
    'Access-Control-Allow-Origin': '*',
  };
  try {
    const resp = await axios[method](URL, { ...data }, HEADERS);
    return resp;
  } catch (error) {
    return error;
  }
}
