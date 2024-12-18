import axios from 'axios';

const api_host_url = 'http://localhost:8080';

export const api = axios.create({
  baseURL: api_host_url,
  headers: {
    'Content-Type': 'application/json'
  }
});
