import useCrud from '../../GenericCRUD/hooks/useCrud';
import userService from '../services/userService';

export default function useUsers() {
  return useCrud({
    endpoint: '/users',
    service: userService,
  });
}