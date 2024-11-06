import { authApi } from './authApi';

const categoryService = {
  getAll: async () => {
    const response = await authApi.get('/category');
    return response.data.data;
  }
};

export default categoryService;
