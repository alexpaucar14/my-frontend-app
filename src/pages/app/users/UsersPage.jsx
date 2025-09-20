import Global from "../../../config/Global";
import CrudTable from '../../../features/GenericCRUD/components/CrudTable';
import UserForm from '../../../features/Users/components/UserForm';
import userColumns from '../../../features/Users/components/UserTableColumns';

export default function UsersPage() {
  return (
    <CrudTable
      title="Usuario"
      columns={userColumns}
      endpoint={Global.ENDPOINTS.USERS}
      FormComponent={UserForm}
    />
  );
}