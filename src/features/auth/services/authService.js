import axios from "axios";

const authService = {
  // Función para realizar la llamada al API de login
  login: async (credentials) => {
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username: credentials.username,
      password: credentials.password,
    });
    return data;
  },

  // Función para obtener los datos del usuario logueado, en caso de que se necesite
  getCurrentUser: async (token) => {
    // Aquí podrías tener otra llamada a la API si fuera necesario
    // Por ahora, solo devolvemos el usuario del localStorage
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};

export default authService;