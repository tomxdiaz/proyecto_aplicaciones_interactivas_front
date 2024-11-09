import { authApi } from './authApi';

const searchService = {
  getUserSearches: async () => {
    const response = await authApi.get(`/search`);
    return response.data.data;
  },

  addSearch: async product => {
    const response = await authApi.put(`/search`, product);
    return response.data.data;
  },

  emptySearches: async () => {
    const response = await authApi.put(`/search/empty`);
    return response.data.data;
  }
};

export default searchService;
