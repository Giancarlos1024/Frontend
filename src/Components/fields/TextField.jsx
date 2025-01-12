import PropTypes from 'prop-types';
import '../../styles/fields/TextField.css'

/**
 * A reusable text field component.
 *
 * @param {object} props - The properties object.
 * @param {string} props.name - The name of the text field, used as the identifier.
 * @param {string} props.label - The label displayed for the text field.
 * @param {string} props.value - The current value of the text field.
 * @param {boolean} props.isRequired - the value is required
 * @param {function(string): void} props.setValue - The function to update the value of the text field.
 * 
 * @returns {JSX.Element} The rendered text field component.
 */
function TextField({ name, label, value, setValue, isRequired }) {
  const changeValue = setValue || function() {}

  return (
    <div className="text-field">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} onChange={e => changeValue(e.currentTarget.value)} value={value} required={isRequired} />
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func,
  isRequired: PropTypes.bool
};

export default TextField;