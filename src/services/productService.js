import axios from 'axios';

export const productService = {
  getAllProducts: async () => {
    const response = await axios.get(`/product`);
    return response.data.data;
  }
};
