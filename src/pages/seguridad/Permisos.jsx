import { Link } from "react-router-dom";

export default function Permisos() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/mantenimiento/usuarios">Usuariosssss</Link></li>
        <li><Link to="/mantenimiento/productos">Producsssstos</Link></li>
        <li><Link to="/seguridad/roles">Roles</Link></li>
        <li><Link to="/reportes/ventas">Reportes</Link></li>
      </ul>
    </nav>
  );
}
