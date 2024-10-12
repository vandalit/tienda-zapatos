import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/data',
  // withCredentials: false
});

export default {
  getHomeData() {
    return apiClient.get('/home.json');
  },
  getProductosData() {
    return apiClient.get('/productos.json');
  }
};
