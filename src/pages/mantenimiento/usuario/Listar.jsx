import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import ModalBase from "../../../components/modal/ModalBase"
import Userform from "../usuario/UserForm"
import { toast } from "react-toastify";

export default function Listar() {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState(users);
  // control modales
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const formRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setRecords(data.users);
      });
  }, []);

  const handlechange = (e) => {
    const filteredRecords = users.filter(record => {
      return record.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setRecords(filteredRecords);
  }

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setSelectedUser(null);
  };

  const handleShow = () => setShow(true);

  // Crear o actualizar
  const handleSubmit = async (values) => {
    try {
      if (editMode && selectedUser) {
        const response = await axios.put(`https://dummyjson.com/users/${selectedUser.id}`, {
          firstName: values.firstName,
          email: values.email,
          phone: values.phone,
          age: values.age
        });
        toast.success(`Usuario actualizado: ${response.data.firstName}`);

        // actualizar en el estado local
        setRecords(records.map(u => u.id === selectedUser.id ? response.data : u));
      } else {
        const response = await axios.post("https://dummyjson.com/users/add", {
          firstName: values.firstName,
          email: values.email,
          phone: values.phone,
          age: values.age
        });
        toast.success(`Usuario creado: ${response.data.firstName}`);
        setRecords([...records, response.data]);
      }
      handleClose();
    } catch (error) {
      console.error("❌ Error:", error);
      toast.error("❌ Error al procesar usuario");
    }
  };

  // eliminar
  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`https://dummyjson.com/users/${userToDelete.id}`);
      toast.info(`🗑️ Usuario eliminado: ${userToDelete.firstName}`);
      setRecords(records.filter(u => u.id !== userToDelete.id));
      setShowDelete(false);
      setUserToDelete(null);
    } catch (error) {
      console.error("❌ Error al eliminar:", error);
      toast.error("❌ Error al eliminar usuario");
    }
  };

  const columns = [
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
      name: 'Phone',
      selector: row => row.phone,
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
      name: 'Action',
      cell: (row) => (
        <>
          {/* editar */}
          <a
            className="action-icon me-2"
            onClick={() => {
              setEditMode(true);
              setSelectedUser(row);
              setShow(true);
            }}
          >
            <i className="mdi mdi-square-edit-outline" />
          </a>

          {/* eliminar */}
          <a
            className="action-icon"
            onClick={() => {
              setUserToDelete(row);
              setShowDelete(true);
            }}
          >
            <i className="mdi mdi-delete" />
          </a>
        </>
      )
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Hyper</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">eCommerce</a>
                  </li>
                  <li className="breadcrumb-item active">Customers</li>
                </ol>
              </div>
              <h4 className="page-title">Customers</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-sm-5">
                    <input type="text" onChange={handlechange} className="form-control" placeholder="Search..." id="search-input" />
                  </div>
                  <div className="col-sm-7">
                    <div className="text-sm-end">
                      <button className="btn btn-success mb-2 me-1" onClick={handleShow}>
                        <i className="mdi mdi-plus-circle me-2" /> Nuevo Usuario
                      </button>
                      <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog" /></button>

                      <button type="button" className="btn btn-light mb-2 me-1">Import</button>
                      <button type="button" className="btn btn-light mb-2">Export</button>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  {
                    <DataTable id="users-datatable" className="table table-centered table-striped dt-responsive nowrap w-100"
                      columns={columns}
                      data={records}
                      pagination
                      highlightOnHover
                      onSelectedRowsChange={data => console.log(records)}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal crear/editar */}
      <ModalBase
        title={editMode ? "Editar Usuario" : "Crear Usuario"}
        show={show}
        handleClose={handleClose}
        customFooter={
          <>
            <button className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
            <button className="btn btn-primary" onClick={() => formRef.current?.handleSubmit()}>Guardar</button>
          </>
        }
      >
        <Userform ref={formRef} onSubmit={handleSubmit} initialValues={selectedUser} />
      </ModalBase>

      {/* modal eliminar */}
      <ModalBase
        title="Confirmar eliminación"
        show={showDelete}
        handleClose={() => setShowDelete(false)}
        customFooter={
          <>
            <button className="btn btn-secondary" onClick={() => setShowDelete(false)}>Cancelar</button>
            <button className="btn btn-danger" onClick={handleDeleteConfirm}>Eliminar</button>
          </>
        }
      >
        {userToDelete && (
          <p>¿Seguro que deseas eliminar al usuario <b>{userToDelete.firstName + ' ' + userToDelete.lastName}</b>?</p>
        )}
      </ModalBase>
    </>
  );
}