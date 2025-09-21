import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../services/authService";

export default function useAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await authService.login(values);

      // Guardamos el token y el usuario en localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: `${response.firstName} ${response.lastName}`,
          email: response.email,
        })
      );

      toast.success("Bienvenido", { autoClose: 2000 });
      navigate("/"); // Redirige al dashboard
    } catch (error) {
      console.error(error);
      toast.error("Credenciales incorrectas", { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    loading,
  };
}