import axios from 'axios';

const api_host_url = 'http://localhost:8080';

export const privateApi = axios.create({
  baseURL: api_host_url,
  headers: {
    Authorization: `Bearer TOKEN`
  }
});

export const publicApi = axios.create({
  baseURL: api_host_url
});
