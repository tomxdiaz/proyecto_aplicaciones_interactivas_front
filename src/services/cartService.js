import { authApi } from './authApi.js';

const cartService = {
  getCart: async () => {
    const response = await authApi.get(`/cart`);
    return response.data.data;
  }
};

export default cartService;
