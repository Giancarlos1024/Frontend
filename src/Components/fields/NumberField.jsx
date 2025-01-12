import PropTypes from 'prop-types';
import '../../styles/fields/NumberField.css'

/**
 * A reusable text field component.
 *
 * @param {object} props - The properties object.
 * @param {string} props.name - The name of the text field, used as the identifier.
 * @param {string} props.label - The label displayed for the text field.
 * @param {number} props.value - The current value of the text field.
 * @param {boolean} props.isRequired - the value is required
 * @param {function(number): void} props.setValue - The function to update the value of the text field.
 * 
 * @returns {JSX.Element} The rendered number field component.
 */
function NumberField({ name, label, value, setValue, isRequired }) {
  const changeValue = setValue || function() {}

  return (
    <div className="number-field">
      <label htmlFor={name}>{label}</label>
      <input type="number" id={name} name={name} onChange={e => changeValue(e.currentTarget.value)} value={value} required={isRequired} step='0.01' />
    </div>
  );
}

NumberField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  setValue: PropTypes.func,
  isRequired: PropTypes.bool
};

export default NumberField;