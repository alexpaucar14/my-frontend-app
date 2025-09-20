import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

// Core
import PrivateRoute from "../components/PrivateRoute";

// Pages - Public
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

// Pages - App
import DashboardPage from "../pages/app/dashboard/DashboardPage";
import UsersPage from "../pages/app/users/UsersPage";
import ProductsPage from "../pages/app/products/ProductsPage";
import SalesReportPage from "../pages/app/reports/SalesReportPage";
import NotFoundPage from "../pages/NotFoundPage";
import PermisosPage from "../pages/app/security/PermisosPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registrarse" element={<RegisterPage />} />
      </Route>

      {/* Private App */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="mantenimiento/usuarios" element={<UsersPage />} />
        <Route path="mantenimiento/productos" element={<ProductsPage />} />
        <Route path="seguridad/permisos" element={<PermisosPage />} />
        <Route path="reportes/ventas" element={<SalesReportPage />} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
