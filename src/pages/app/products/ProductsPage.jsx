import Global from "../../../config/Global";
import CrudTable from '../../../features/GenericCRUD/components/CrudTable';
import ProductForm from '../../../features/products/components/ProductForm';
import productColumns from '../../../features/products/components/ProductTableColumns';

export default function UsersPage() {
  return (
    <CrudTable
      title="Producto"
      columns={productColumns}
      endpoint={Global.ENDPOINTS.PRODUCTS}
      FormComponent={ProductForm}
    />
  );
}