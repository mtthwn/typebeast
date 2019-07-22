import axios from 'axios';

export default axios.create({
  baseURL: 'http://127.0.0.1:8081/api/',
  timeout: 1000,
  headers: {
    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
    'Access-Control-Allow-Origin': '*'
  }
});
