import { api } from './api';
import { authApi } from './authApi';

const productService = {
  getAllProducts: async () => {
    const response = await api.get(`/product`);
    return response.data.data;
  },
  get: async id => {
    const response = await api.get(`/product/${id}`);
    return response.data.data;
  },
  add: async product => await authApi.post('/product', product),
  update: async product => await authApi.put('/product', product)
};

export default productService;
