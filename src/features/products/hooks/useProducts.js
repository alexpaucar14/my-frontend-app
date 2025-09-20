import useCrud from '../../GenericCRUD/hooks/useCrud';
import productService from '../services/productService';

export default function useProducts() {
  return useCrud({
    endpoint: '/products',
    service: productService,
  });
}