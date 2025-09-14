import ListarBase from "../../../components/tables/ListarBase";
import UserForm from "../../../components/forms/UserForm";
import Global from "../../../config/Global";

// 📌 Configuración de columnas específicas para usuarios
const userColumns = ({ onEdit, onDelete }) => [
  {
    name: "Customer",
    cell: (row) => (
      <div className="table-user d-flex align-items-center">
        <img src={row.image} alt="table-user" className="me-2 rounded-circle" width="32" height="32" />
        <a href="javascript:void(0);" className="text-body fw-semibold">
          {row.firstName} {row.lastName} { row.maidenName}
        </a>
      </div>
    ),
  },
  {
    name: "Teléfono",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.gender,
    sortable: true,
    cell: row => (
      <span className={`badge badge-${row.gender === 'female' ? 'success' : 'danger'}-lighten`}>
        {row.gender}
      </span>
    )
  },
  {
    name: "Acciones",
    cell: (row) => (
      <>
        <a className="action-icon me-2" onClick={() => onEdit(row)}>
          <i className="mdi mdi-square-edit-outline" />
        </a>
        <a className="action-icon" onClick={() => onDelete(row)}>
          <i className="mdi mdi-delete" />
        </a>
      </>
    ),
  },
];

export default function ListarUsuarios() {
  return (
    <ListarBase
      title="Usuario"
      columns={userColumns}
      endpoint={Global.ENDPOINTS.USERS}
      FormComponent={UserForm}
    />
  );
}
