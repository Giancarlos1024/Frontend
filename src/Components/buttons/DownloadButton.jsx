import PropTypes from 'prop-types';
import DownloadIcon from '../../icons/DownloadIcon';
import '../../styles/buttons/DownloadButton.css';

/**
 * @param {object} props - The propierties object.
 * @param {string} props.content - Is a button content
 * @param {function(import('react').ChangeEvent): void} props.onDownload - Is a download event
 * @returns {JSX.Element} - The rendered submit button component.
 */
function DownloadButton({ content, onDownload }) {
  return (
    <button
    className='download-button'
    type='button'
    onClick={e => onDownload(e)}
    >
      <DownloadIcon />
      {content}
    </button>
  );
}

DownloadButton.propTypes = {
  content: PropTypes.string.isRequired,
  onDownload: PropTypes.func.isRequired
}

export default DownloadButton;