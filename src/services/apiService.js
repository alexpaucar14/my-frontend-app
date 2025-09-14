import axios from "axios";
import Global from "../config/Global";

// ✅ Servicio genérico para consumir APIs
export const apiService = {
  getAll: async (endpoint) => {
    const res = await axios.get(`${Global.API_BASE}${endpoint}`);
    return res.data;
  },

  getById: async (endpoint, id) => {
    const res = await axios.get(`${Global.API_BASE}${endpoint}/${id}`);
    return res.data;
  },

  create: async (endpoint, data) => {
    const res = await axios.post(`${Global.API_BASE}${endpoint}/add`, data);
    return res.data;
  },

  update: async (endpoint, id, data) => {
    const res = await axios.put(`${Global.API_BASE}${endpoint}/${id}`, data);
    return res.data;
  },

  remove: async (endpoint, id) => {
    const res = await axios.delete(`${Global.API_BASE}${endpoint}/${id}`);
    return res.data;
  },
};
