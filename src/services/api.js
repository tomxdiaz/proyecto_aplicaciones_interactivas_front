import axios from 'axios';

const api_host_url = import.meta.env.VITE_API_HOST_URL;

const api = axios.create({
  baseURL: api_host_url,
  headers: {
    Authorization: `Bearer TOKEN`
  }
});

export default api;
