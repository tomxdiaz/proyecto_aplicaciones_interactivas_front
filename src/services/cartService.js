import { authApi } from './authApi.js';

const cartService = {
  getItems: async () => {
    const response = await authApi.get(`/cart`);
    return response.data.data;
  }
,

  modifyItem: async itemData => {
    const response = await authApi.put(`/cart/item`, itemData);
    return response.data.data;
  },
  
  removeItemFromCart: async product => {

    const response = await authApi.put(`/cart/item/${product.id}`);
    return response.data.data;
  },
  emptyCart: async () => {

    const response = await authApi.put(`/cart/empty`);
    return response.data.data;
  },
  confirmCart: async () => {
    const response = await authApi.put(`/cart/confirm`);
    return response.data.data;
  },
}

export default cartService;
