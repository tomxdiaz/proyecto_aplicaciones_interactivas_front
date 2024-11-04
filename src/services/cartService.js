import { authApi } from './authApi.js';

const cartService = {
  getItems: async () => {
    const response = await authApi.get(`/cart`);
    return response.data.data;
  }
,

  modifyItem: async itemData => {
    console.log(itemData);
    const response = await authApi.put(`/cart/item`, itemData);
    return response.data.data;
  },
  
  removeItemFromCart: async product => {

    console.log(product);
    const response = await authApi.put(`/cart/item/${product.id}`);
    console.log(response.data.ok);
    return response.data.data;
  }
}

export default cartService;
