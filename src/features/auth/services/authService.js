import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

const authService = {
  login: async (credentials) => {
    const { data } = await axios.post(`${API_URL}/login`, {
      email: credentials.username,
      clave: credentials.password,
    });
    return data; // { token, user }
  },

  getCurrentUser: () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};

export default authService;
