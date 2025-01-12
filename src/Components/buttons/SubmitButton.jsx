import PropTypes from 'prop-types';
import '../../styles/buttons/SubmitButton.css';

/**
 * @param {object} props - The propierties object.
 * @param {string} props.content - Is a button content
 * @returns {JSX.Element} - The rendered submit button component.
 */
function SubmitButton({ content }) {
  return <button className='submit-button' type='submit'>{content}</button>
}

SubmitButton.propTypes = {
  content: PropTypes.string.isRequired
}

export default SubmitButton;