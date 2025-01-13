import { useState } from 'react';
import ReactDOM from 'react-dom'; // Importamos ReactDOM para usar createPortal
import BaseModal from './BaseModal';
import ComisionesTemporalesForm from '../forms/RegistrarComisionTemporalForm';

/**
 * Componente para mostrar el formulario en un modal utilizando React Portal
 */
function ComisionTemporalModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Agregar Comisión Temporal</button>

      {isModalOpen &&
        ReactDOM.createPortal(
          <BaseModal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Agregar Comisión Temporal</h2>
            <ComisionesTemporalesForm />
          </BaseModal>,
          document.body
        )}
    </div>
  );
}

export default ComisionTemporalModal;
