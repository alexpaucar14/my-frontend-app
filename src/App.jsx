import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Productos from "./pages/mantenimiento/producto/Listar";
import Permisos from "./pages/seguridad/Permisos";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login/Login";
import Registro from "./pages/login/Registro";
import AuthLayout from "./layouts/AuthLayout";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login → usa AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registro />} />
        </Route>

        {/* Resto de la app → usa MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="mantenimiento/productos" element={<Productos />} />
          <Route path="pages/Dashboard" element={<Dashboard />} />
          <Route path="seguridad/permisos" element={<Permisos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

