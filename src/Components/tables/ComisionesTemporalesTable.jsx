import { useState, useEffect } from "react";
import { GetAllComisionesTemporales, DeleteComisionTemporal } from "../../services/ComisionesTemporalesServices";
import { formatDate } from '../../utils/formatDate';
import EditarComisionTemporalForm from "../forms/EditarComisionTemporalForm";
import BaseModal from "../modals/BaseModal";
import '../../styles/tables/DataTable.css';

const columns = Object.freeze([
  'Responsable',
  'Poliza',
  'N° Factura',
  'Fecha',
  'Ramo Aseguradora',
  'Ramo SBS',
  'Tipo de Moneda',
  'Monto Prima',
  'Monto Comision',
  'Acciones'
]);

function ComisionesTemporalesTable() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedComision, setSelectedComision] = useState(null);

  useEffect(() => {
    GetAllComisionesTemporales().then(ct => setRows(ct));
  }, []);

  const handleNextPage = () => setPage(prevPage => prevPage + 10);
  const handlePreviousPage = () => setPage(prevPage => Math.max(prevPage - 10, 0));

  const handleEdit = (comision) => {
    setSelectedComision(comision);
  };

  const handleDelete = async (id) => {
    const isDeleted = await DeleteComisionTemporal(id);
    if (isDeleted) {
      setRows(rows.filter(ct => ct.getId() !== id));
    } else {
      console.error('Error al eliminar la comisión temporal');
    }
  };

  const closeEditModal = () => setSelectedComision(null);

  return (
    <div className="container-table">
      <table className="table">
        <thead>
          <tr className="table__row--header">
            {columns.map(c => (
              <th className="table__column" key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(page, page + 10).map(ct => (
            <tr className="table__row" key={ct.getId()}>
              <td>{ct.getUsername()}</td>
              <td>{ct.getPoliza()}</td>
              <td>{ct.getFactura()}</td>
              <td>{formatDate(ct.getFecha())}</td>
              <td>{ct.getRamoAseguradora()}</td>
              <td>{ct.getRamoSbs()}</td>
              <td>{ct.getMoneda()}</td>
              <td>{ct.getPrima()}</td>
              <td>{ct.getComision()}</td>
              <td>
                <button className="edit-button" type="button" onClick={() => handleEdit(ct)}>Editar</button>
                <button className="delete-button" type="button" onClick={() => handleDelete(ct.getId())}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paginator">
        <button className="paginator__back" onClick={handlePreviousPage} disabled={page === 0}>Anterior</button>
        <button className="paginator__next" onClick={handleNextPage} disabled={page + 10 >= rows.length}>Siguiente</button>
      </div>

      {/* Modal para editar */}
      {selectedComision && (
        <BaseModal isOpen={!!selectedComision} onClose={closeEditModal}>
          <EditarComisionTemporalForm comisionTemporal={selectedComision} onSave={closeEditModal} />
        </BaseModal>
      )}
    </div>
  );
}

export default ComisionesTemporalesTable;
