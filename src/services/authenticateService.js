import { publicApi } from './api';

const authService = {
  // Método para autenticar al usuario (login)
  login: async (credentials) => {
    const response = await publicApi.post(`/auth/authenticate`, credentials);
    sessionStorage.setItem('token' , response.data);
    return response.data;
  },

  // Método para registrar un nuevo usuario
  register: async (userData) => {
    const response = await publicApi.post(`/auth/register`, userData);
    return response.data;
  },
};

export default authService;