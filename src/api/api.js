import axios from 'axios';
const api_host_url = import.meta.env.VITE_API_HOST_URL;

export default {
  getAllProducts: async () => {
    const response = (await axios.get(`${api_host_url}/product`)).data;
    console.log(response);
    return response.data;
  },
};
