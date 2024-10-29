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

privateApi.interceptors.request.use = 
  (config) => {
    config.headers.Authorization = `Bearer TOKEN ${sessionStorage.accessToken}`;
    return config;} ,
  (error) => {
    Promise.reject(error);
  }

privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 404) {
      // Token expirado, redirigir al login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
)
