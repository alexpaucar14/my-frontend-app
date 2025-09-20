// /hooks/useCrud.js
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { apiService } from "../services/crudService";

export default function useCrud(endpoint, title) {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const formRef = useRef(null);

  // 📌 cargar datos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const list = await apiService.getAll(endpoint);
      setData(list);
      setRecords(list);
    } catch (err) {
      console.error(err);
      toast.error(`Error al cargar ${title}`);
    }
  };

  // 📌 buscar
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const filtered = data.filter((r) =>
      JSON.stringify(r).toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(filtered);
  };

  // 📌 guardar
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

  // 📌 eliminar
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

  // 📌 cerrar modal
  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setSelected(null);
  };

  return {
    // estados
    data,
    records,
    show,
    editMode,
    selected,
    showDelete,
    toDelete,
    searchValue,
    formRef,

    // acciones
    setShow,
    setEditMode,
    setSelected,
    setShowDelete,
    setToDelete,
    handleSearch,
    handleSubmit,
    handleDeleteConfirm,
    handleClose,
  };
}
