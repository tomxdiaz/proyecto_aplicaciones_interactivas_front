import axios from 'axios';
import ROUTES, { getRoute } from '../pages/routes';

const api_host_url = 'http://localhost:8080';

export const authApi = axios.create({
  baseURL: api_host_url,
  headers: {
    'Content-Type': 'application/json'
  }
});

authApi.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
  return config;
});

authApi.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    const currentRoute = window.location.pathname;
    if (error.response.status === 403) {
      window.location.href = `${getRoute(ROUTES.LOGIN)}?redirectURL=${currentRoute}`;
    }
    return Promise.reject(error);
  }
);
