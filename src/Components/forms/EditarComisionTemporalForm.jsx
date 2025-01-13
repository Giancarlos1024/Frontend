import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import TextField from '../fields/TextField';
import NumberField from '../fields/NumberField';
import OptionsField from '../fields/OptionsField';
import SubmitButton from '../buttons/SubmitButton';
import DateField from '../fields/DateField';
import ramosCia from '../../constants/ramoCia';
import ramosSbs from '../../constants/ramoSbs';
import monedas from '../../constants/monedas';
import { UpdateComisionTemporal } from '../../services/ComisionesTemporalesServices';

/**
 * Formulario para editar la comisión temporal.
 * @param {object} props
 * @param {import('../../models/ComisionTemporal').default} props.comisionTemporal - Comisión temporal a editar.
 * @param {Function} props.onSave - Función que se ejecuta al guardar los cambios.
 */
function EditarComisionTemporalForm({ comisionTemporal, onSave }) {
  const [moneda, setMoneda] = useState(comisionTemporal.moneda || 'SOLES');

  useEffect(() => {
    setMoneda(comisionTemporal.getMoneda());
  }, [comisionTemporal]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      comisionTemporal.setPoliza(formObject.poliza);
      comisionTemporal.setFactura(formObject.factura);
      comisionTemporal.setFecha(formObject.fecha);
      comisionTemporal.setRamoAseguradora(formObject.ramo_aseguradora);
      comisionTemporal.setRamoSbs(formObject.ramo_sbs);
      comisionTemporal.setMoneda(formObject.moneda);
      comisionTemporal.setPrima(formObject.prima);
      comisionTemporal.setComision(formObject.comision);
      comisionTemporal.setUsername(globalThis.localStorage.getItem('username'));

      const isUpdated = await UpdateComisionTemporal(comisionTemporal);
      if (!isUpdated) throw new Error('Comisión temporal no guardada.');

      onSave();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="comisiones-temporales-form" onSubmit={handleSubmit}>
      <div className="comisiones-temporales-form_grid-to-two">
        <TextField name="poliza" label="POLIZA" value={comisionTemporal.getPoliza()} isRequired />
        <TextField name="factura" label="FACTURA" value={comisionTemporal.getFactura()} isRequired />
      </div>
      <div className="comisiones-temporales-form_grid-to-three">
        <DateField name="fecha" label="FECHA" isRequired />
        <OptionsField name="ramo_aseguradora" label="RAMO ASEGURADORA" options={ramosCia} defaultValue={comisionTemporal.getRamoAseguradora()} />
        <OptionsField name="ramo_sbs" label="RAMO SBS" options={ramosSbs} defaultValue={comisionTemporal.getRamoSbs()} />
      </div>
      <div className="comisiones-temporales-form_grid-to-three">
        <OptionsField name="moneda" label="MONEDA" options={monedas} defaultValue={moneda} setValue={setMoneda} />
        <NumberField name="prima" label={`PRIMA ${moneda}`} value={parseFloat(comisionTemporal.getPrima())} isRequired />
        <NumberField name="comision" label={`COMISION ${moneda}`} value={parseFloat(comisionTemporal.getComision())} isRequired />
      </div>
      <SubmitButton content="Guardar" />
    </form>
  );
}

EditarComisionTemporalForm.propTypes = {
  comisionTemporal: PropTypes.object.isRequired,
  onSave:  PropTypes.func
}

export default EditarComisionTemporalForm;
