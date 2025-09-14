import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";


const columns = [
  {
    name: "Customer",
    cell: (row) => (
      <div className="table-user d-flex align-items-center">
        <img src={row.image} alt="table-user" className="me-2 rounded-circle" width="32" height="32" />
        <a href="javascript:void(0);" className="text-body fw-semibold">{row.firstName}</a>
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
        <a href="javascript:void(0);" className="action-icon"><i className="mdi mdi-square-edit-outline" /></a>
        <a href="javascript:void(0);" className="action-icon"><i className="mdi mdi-delete" />
        </a>
      </>
    )
  },
];


export default function Listar() {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState(users);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users);
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
                    <a href="javascript:void(0);" className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Customers</a>
                  </div>
                  <div className="col-sm-7">
                    <div className="text-sm-end">
                      <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog" /></button>
                      <button type="button" className="btn btn-light mb-2 me-1">Import</button>
                      <button type="button" className="btn btn-light mb-2">Export</button>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <input type="text" onChange={handlechange} className="form-control w-25 d-inline-block" placeholder="Search..." id="search-input" />
                  {
                    <DataTable
                      id="users-datatable"
                      className="table table-centered table-striped dt-responsive nowrap w-100"
                      columns={columns}
                      data={records}
                      pagination
                      highlightOnHover
                      selectableRows
                      selectableRowsComponentProps={{
                        className: "form-check-input",
                      }}
                      onSelectedRowsChange={data => console.log(records)}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}