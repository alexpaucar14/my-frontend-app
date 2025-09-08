import { Link } from "react-router-dom";

export default function Nuevo() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/mantenimiento/usuarios">Usuarios</Link></li>
        <li><Link to="/mantenimiento/productos">Productos</Link></li>
        <li><Link to="/seguridad/roles">Roles</Link></li>
        <li><Link to="/reportes/ventas">Reportes</Link></li>
      </ul>
    </nav>
  );
}