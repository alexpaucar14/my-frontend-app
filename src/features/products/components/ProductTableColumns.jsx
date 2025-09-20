import React from 'react';

// 📌 Configuración de columnas específica para usuarios
const productColumns = ({ onEdit, onDelete }) => [
  {
    name: "title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "category",
    selector: (row) => row.category,
    sortable: true,
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

export default productColumns;