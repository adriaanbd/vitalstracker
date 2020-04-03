import axios from 'axios';

// const HEROKU_BASE_URL = 'http://lychee-cake-00846.herokuapp.com';
const LOCAL_BASE_URL = 'http://127.0.0.1:8000';

export default async function sendRequest(method, path, data) {
  const url = `${LOCAL_BASE_URL}/${path}`;
  try {
    const resp = await axios[method](url, { ...data });
    return resp;
  } catch (error) {
    return error;
  }
}
