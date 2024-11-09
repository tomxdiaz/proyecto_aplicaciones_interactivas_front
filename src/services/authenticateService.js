import { api } from './api';

const authService = {
  // Método para autenticar al usuario (login)

  login: async (username, password) => {
    const response = await api.post(`/auth/authenticate`, {
      username,
      password
    });

    const { access_token } = response.data.data;

    sessionStorage.setItem('token', access_token);

    return response.data.data;
  },

  // Método para registrar un nuevo usuario
  register: async userData => {
    const response = await api.post(`/auth/register`, userData);
    return response.data.data;
  }
};

export default authService;
