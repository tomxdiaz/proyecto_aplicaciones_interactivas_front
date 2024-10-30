import axios from 'axios';
import ROUTES from '../pages/routes';

const api_host_url = 'http://localhost:8080';

export const authApi = axios.create({
  baseURL: api_host_url,
  headers: {
    'Content-Type': 'application/json'
  }
});

authApi.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${sessionStorage.token}`;
  return config;
});

authApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 404) {
      // ver este error - cual/cuales tendria/tendrian que ser?
      // Token expirado, redirigir al login
      window.location.href = ROUTES.LOGIN.path;
    }
    return Promise.reject(error);
  }
);
