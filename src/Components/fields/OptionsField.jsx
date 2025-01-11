import PropTypes from 'prop-types';
import '../../styles/fields/OptionsField.css';

/**
 * A reusable options field component.
 *
 * @param {object} props - The properties object.
 * @param {string} props.name - The name of the options field, used as the identifier.
 * @param {string} props.label - The label displayed for the options field.
 * @param {string} props.value - The currently selected value.
 * @param {function(string): void} props.setValue - The function to update the selected value.
 * @param {Array<string>} props.options - The list of options to display in the dropdown.
 * @param {string} props.defaultValue - The default value to display in the dropdown
 * @returns {JSX.Element} The rendered options field component.
 */
function OptionsField({ name, label, value, setValue, options, defaultValue }) {
  return (
    <div className="options-field">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        defaultValue={defaultValue || 'Seleccione'}
      >
        <option key={0} value="Seleccione" disabled>
            Seleccione
        </option>
        {options.map((option, index) => (
          <option key={index + 1} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

OptionsField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string
};

export default OptionsField;
