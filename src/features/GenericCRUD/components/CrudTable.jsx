import DataTable from "react-data-table-component";
import CrudModal from "../../GenericCRUD/components/CrudModal";
import { Spinner } from "react-bootstrap";
import useCrud from "../hooks/useCrud";

export default function CrudTable({ title, columns, endpoint, FormComponent }) {
  const {
    records,
    show,
    editMode,
    selected,
    showDelete,
    toDelete,
    searchValue,
    formRef,
    setShow,
    setEditMode,
    setSelected,
    setShowDelete,
    setToDelete,
    handleSearch,
    handleSubmit,
    handleDeleteConfirm,
    handleClose,
  } = useCrud(endpoint, title);

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1rem",
        fontWeight: "bold",
      },
    },
  };

  return (
    <>
      <div className="container-fluid">
        {/* header */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#">Hyper</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">eCommerce</a>
                  </li>
                  <li className="breadcrumb-item active">{title}</li>
                </ol>
              </div>
              <h4 className="page-title">{title}</h4>
            </div>
          </div>
        </div>

        {/* tabla */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                {/* search y botones */}
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
                      <button
                        className="btn btn-success mb-2 me-1"
                        onClick={() => setShow(true)}
                      >
                        <i className="mdi mdi-plus-circle me-2" /> Nuevo {title}
                      </button>
                      <button type="button" className="btn btn-success mb-2 me-1">
                        <i className="mdi mdi-cog" />
                      </button>
                      <button type="button" className="btn btn-light mb-2 me-1">
                        Import
                      </button>
                      <button type="button" className="btn btn-light mb-2">
                        Export
                      </button>
                    </div>
                  </div>
                </div>

                {/* tabla */}
                <div className="table-responsive">
                  <DataTable
                    id="users-datatable"
                    className="table table-centered table-striped dt-responsive nowrap w-100"
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
                    progressComponent={
                      <div style={{ padding: "20px" }}>
                        <Spinner animation="border" variant="primary" />
                        <span style={{ marginLeft: "10px" }}>
                          Cargando datos...
                        </span>
                      </div>
                    }
                    noDataComponent="⚠️ No se encontraron registros"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal crear/editar */}
      <CrudModal
        title={editMode ? "Editar" : "Crear"}
        show={show}
        handleClose={handleClose}
        customFooter={
          <>
            <button className="btn btn-secondary" onClick={handleClose}>
              Cancelar
            </button>
            <button
              className="btn btn-primary"
              onClick={() => formRef.current?.handleSubmit()}
            >
              Guardar
            </button>
          </>
        }
      >
        <FormComponent
          ref={formRef}
          onSubmit={handleSubmit}
          initialValues={selected}
        />
      </CrudModal>

      {/* modal eliminar */}
      <CrudModal
        title="Confirmar eliminación"
        show={showDelete}
        handleClose={() => setShowDelete(false)}
        customFooter={
          <>
            <button
              className="btn btn-secondary"
              onClick={() => setShowDelete(false)}
            >
              Cancelar
            </button>
            <button className="btn btn-danger" onClick={handleDeleteConfirm}>
              Eliminar
            </button>
          </>
        }
      >
        {toDelete && (
          <p>
            ¿Seguro que deseas eliminar <b>{toDelete.firstName}</b>?
          </p>
        )}
      </CrudModal>
    </>
  );
}
