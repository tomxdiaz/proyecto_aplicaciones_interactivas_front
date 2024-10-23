import axios from 'axios';

const api_host_url = import.meta.env.VITE_API_HOST_URL;

export const privateApi = axios.create({
  baseURL: api_host_url,
  headers: {
    Authorization: `Bearer TOKEN`
  }
});

export const publicApi = axios.create({
  baseURL: api_host_url
});
