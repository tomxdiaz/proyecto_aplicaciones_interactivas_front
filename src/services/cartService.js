import { authApi } from './authApi.js';

const cartService = {
  getItems: async () => {
    const response = await authApi.get(`/cart`);
    return response.data.data;
  }
};

export default cartService;
