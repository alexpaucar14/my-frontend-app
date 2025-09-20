import { useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import CrudModal from "../../GenericCRUD/components/CrudModal";
import { apiService } from "../../../services/apiService";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

export default function CrudTable({ title, columns, endpoint, FormComponent }) {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selected, setSelected] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const formRef = useRef(null);

  // 📌 Cargar datos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await apiService.getAll(endpoint);
      const list = res.users || res; // dummyjson retorna {users: []}
      setData(list);
      setRecords(list);
    } catch (err) {
      console.error(err);
      toast.error("Error al cargar datos");
    }
  };

  // 📌 Buscar
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const filtered = data.filter((r) =>
      JSON.stringify(r).toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(filtered);
  };

  // 📌 Guardar (crear/editar)
  const handleSubmit = async (values) => {
    try {
      if (editMode && selected) {
        const updated = await apiService.update(endpoint, selected.id, values);
        toast.success(`${title} actualizado`);
        setRecords(records.map((r) => (r.id === selected.id ? updated : r)));
      } else {
        const created = await apiService.create(endpoint, values);
        toast.success(`${title} creado`);
        setRecords([...records, created]);
      }
      handleClose();
    } catch (err) {
      console.error(err);
      toast.error(`Error al guardar ${title}`);
    }
  };

  // 📌 Eliminar
  const handleDeleteConfirm = async () => {
    try {
      await apiService.remove(endpoint, toDelete.id);
      toast.info(`${title} eliminado`);
      setRecords(records.filter((r) => r.id !== toDelete.id));
      setShowDelete(false);
      setToDelete(null);
    } catch (err) {
      console.error(err);
      toast.error(`Error al eliminar ${title}`);
    }
  };

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setSelected(null);
  };
 

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: '1rem',
        fontWeight: 'bold',
      },
    },
  };

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
                  <li className="breadcrumb-item active">{title}</li>
                </ol>
              </div>
              <h4 className="page-title">{title}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-12 col-sm-5 mb-2 mb-sm-0">
                    <div className="input-group">
                      <span className="input-group-text" id="search-addon">
                        <i className="mdi mdi-magnify"></i>
                      </span>
                      <input
                        type="search"
                        value={searchValue}
                        onChange={handleSearch}
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                    </div>

                  </div>
                  <div className="col-sm-7">
                    <div className="text-sm-end d-flex flex-wrap gap-2">
                      <button className="btn btn-success mb-2 me-1" onClick={() => setShow(true)}>
                        <i className="mdi mdi-plus-circle me-2" /> Nuevo {title}
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
                      columns={columns({
                        onEdit: (row) => {
                          setEditMode(true);
                          setSelected(row);
                          setShow(true);
                        },
                        onDelete: (row) => {
                          setToDelete(row);
                          setShowDelete(true);
                        },
                      })}
                      data={records}
                      pagination
                      paginationComponentOptions={paginationComponentOptions}
                      striped
                      responsive
                      highlightOnHover
                      pointerOnHover
                      customStyles={customStyles}
                      onSelectedRowsChange={data => console.log(records)}
                      progressComponent={
                        <div style={{ padding: "20px" }}>
                          <Spinner animation="border" variant="primary" />
                          <span style={{ marginLeft: "10px" }}>Cargando datos...</span>
                        </div>
                      }
                      noDataComponent="⚠️ No se encontraron registros"
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal crear/editar */}
      <CrudModal
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
        <FormComponent ref={formRef} onSubmit={handleSubmit} initialValues={selected} />
      </CrudModal>

      {/* modal eliminar */}
      <CrudModal
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
        {toDelete && (
          <p>¿Seguro que deseas eliminar al usuario <b>{toDelete.firstName + ' ' + toDelete.lastName}</b>?</p>
        )}
      </CrudModal>
    </>
  );
}
