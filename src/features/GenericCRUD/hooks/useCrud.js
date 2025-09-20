import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useCrud = ({ endpoint, service }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await service.getAll(endpoint);
      if (Array.isArray(result.users) || Array.isArray(result)) {
        setData(result.users || result);
      } else {
        setData([]);
        toast.error('La respuesta de la API no es un formato válido.');
      }
    } catch (err) {
      setError(err);
      setData([]);
      toast.error('Error al cargar los datos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const openModal = (item = null) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSave = async (formData) => {
    setLoading(true);
    try {
      if (formData.id) {
        await service.update(endpoint, formData.id, formData);
        toast.success('Elemento actualizado con éxito.');
      } else {
        await service.create(endpoint, formData);
        toast.success('Elemento creado con éxito.');
      }
      fetchData();
      closeModal();
    } catch (err) {
      setError(err);
      toast.error('Error al guardar el elemento.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar este elemento?`)) {
      setLoading(true);
      try {
        await service.remove(endpoint, item.id);
        toast.success('Elemento eliminado con éxito.');
        fetchData();
      } catch (err) {
        setError(err);
        toast.error('Error al eliminar el elemento.');
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    data,
    loading,
    error,
    isModalOpen,
    selectedItem,
    openModal,
    closeModal,
    handleSave,
    handleDelete,
  };
};

export default useCrud;