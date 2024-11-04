import { api } from './api';

const productService = {
  getAllProducts: async () => {
    const response = await api.get(`/product`);
    return response.data.data;
  },

  getProductById: async id => {
    const response = await api.get(`/product/${id}`);
    return response.data.data;
  }
};

export default productService;
