import PropTypes from 'prop-types';
import { useEffect } from 'react';
import '../../styles/modals/BaseModal.css';

/**
 * @param {object} props - The properties
 * @param {JSX.Element} props.children - The content to display inside the modal
 * @param {boolean} props.isOpen - Whether the modal is open or not
 * @param {function} props.onClose - Function to close the modal
 * @returns {JSX.Element}
 */
function BaseModal({ children, isOpen, onClose }) {
  useEffect(() => {
    // Close the modal if the user presses the Escape key
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

BaseModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BaseModal;
