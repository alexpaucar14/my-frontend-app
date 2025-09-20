import axios from 'axios';
import Global from '../../../config/Global';

const api = axios.create({
  baseURL: Global.API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const userService = {
  getAll: async (endpoint) => {
    const response = await api.get(endpoint);
    return response.data;
  },
  create: async (endpoint, data) => {
    const response = await api.post(endpoint, data);
    return response.data;
  },
  update: async (endpoint, id, data) => {
    const response = await api.put(`${endpoint}/${id}`, data);
    return response.data;
  },
  remove: async (endpoint, id) => {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  },
};

export default userService;