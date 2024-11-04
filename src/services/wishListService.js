import { authApi } from './authApi.js';

const wishListService = {
  getUserWishList: async () => {
    const response = await authApi.get('/wishlist');

    return response.data.data;
  },

  addProductToWishList: async product => {
    const response = await authApi.put(`/wishlist`, product);

    return response.data.data;
  },

  removeProductFromWishList: async product => {
    const response = await authApi.put(`/wishlist/${product.id}`);

    return response.data.data;
  },

  emptyWishList: async () => {
    const response = await authApi.put(`/wishlist/empty`);

    return response.data.data;
  }
};

export default wishListService;
