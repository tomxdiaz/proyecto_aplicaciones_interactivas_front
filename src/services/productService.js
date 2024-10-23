import { publicApi } from './api';

const productService = {
  getAllProducts: async () => {
    const response = await publicApi.get(`/product`);
    return response.data.data;
  }
};

export default productService;
