import axios from "axios";
import Global from "../../../config/Global";

function extractList(res) {
  // 🔹 Si el response ya es array
  if (Array.isArray(res)) return res;

  // 🔹 Si es objeto, busca la primera propiedad que sea un array
  if (typeof res === "object" && res !== null) {
    const firstArrayKey = Object.keys(res).find(
      (key) => Array.isArray(res[key])
    );
    if (firstArrayKey) return res[firstArrayKey];
  }

  // Si nada aplica, devolver array vacío
  return [];
}
// ✅ Servicio genérico para consumir APIs
export const apiService = {
  getAll: async (endpoint) => {
    const res = await axios.get(`${Global.API_BASE}${endpoint}`);
    return extractList(res.data);
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
