import PropTypes from 'prop-types';
import '../../styles/fields/DateField.css';

/**
 * A reusable date field component.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the date field, used as the identifier.
 * @param {string} props.label - The label displayed for the date field.
 * @param {string} props.value - The current value of the date field (in YYYY-MM-DD format).
 * @param {function(string): void} props.setValue - The function to update the value of the date field.
 * 
 * @returns {JSX.Element} The rendered date field component.
 */
function DateField({ name, label, value, setValue }) {
  return (
    <div className="date-field">
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default DateField;
