import { api } from './api';

const productService = {
  getAllProducts: async () => {
    const response = await api.get(`/product`);
    return response.data.data;
  }
};

export default productService;
