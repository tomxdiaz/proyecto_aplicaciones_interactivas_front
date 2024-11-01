import { authApi } from './authApi.js';

const userService = {
  getUserData: async () => {
    const response = await authApi.get(`/user`);

    return response.data.data;
  }
};

export default userService;
