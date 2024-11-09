import { authApi } from './authApi.js';

const buyService = {
  getUserBuy: async () => {
    const response = await authApi.get(`/buy`);
    return response.data.data;
  },
}

export default buyService;

