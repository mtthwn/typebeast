import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8081/api/',
  timeout: 1000,
  headers: {
    authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*'
  }
});

export { instance as default };
