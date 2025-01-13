import { useState } from 'react';

import ComisionTemporal from '../../models/ComisionTemporal';

import TextField from '../fields/TextField';
import NumberField from '../fields/NumberField';
import OptionsField from '../fields/OptionsField';
import SubmitButton from '../buttons/SubmitButton';

import ramosCia from '../../constants/ramoCia';
import ramosSbs from '../../constants/ramoSbs';
import monedas from '../../constants/monedas';
import DateField from '../fields/DateField';

import '../../styles/forms/ComisionesTemporalesForm.css';
import { SaveComisionTemporal } from '../../services/ComisionesTemporalesServices';

/**
 * Represents a HandleSubmit
 * @param {import("react").FormEvent} event - The event
*/
const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formObject = Object.fromEntries(formData);

  try {
    const comisionTemporal = new ComisionTemporal();
    comisionTemporal.setPoliza(formObject.poliza);
    comisionTemporal.setFactura(formObject.factura)
    comisionTemporal.setFecha(formObject.fecha);
    comisionTemporal.setRamoAseguradora(formObject.ramo_aseguradora);
    comisionTemporal.setRamoSbs(formObject.ramo_sbs);
    comisionTemporal.setMoneda(formObject.moneda);
    comisionTemporal.setPrima(formObject.prima);
    comisionTemporal.setComision(formObject.comision);
    comisionTemporal.setUsername(globalThis.localStorage.getItem('username'));

    const isSaved = await SaveComisionTemporal(comisionTemporal);

    if (!isSaved)
      throw new Error('Comision Temporal Fallida.');
  } catch (error) {
    console.error(error);
  } finally {
    event.target.reset();
  }
}

function RegistrarComisionTemporalForm() {
  const [moneda, setMoneda] = useState('SOLES');

  return (
    <form className='comisiones-temporales-form' onSubmit={handleSubmit}>
      <div className='comisiones-temporales-form_grid-to-two'>
        <TextField name='poliza' label='POLIZA' isRequired />
        <TextField name='factura' label='FACTURA' isRequired />
      </div>
      <div className='comisiones-temporales-form_grid-to-three'>
        <DateField name='fecha' label='FECHA' isRequired />
        <OptionsField name='ramo_aseguradora' label='RAMO ASEGURADORA' options={ramosCia} />
        <OptionsField name='ramo_sbs' label='RAMO SBS' options={ramosSbs} />
      </div>
      <div className='comisiones-temporales-form_grid-to-three'>
        <OptionsField name='moneda' label='MONEDA' options={monedas} defaultValue={moneda} setValue={setMoneda} />
        <NumberField name='prima' label={`PRIMA ${moneda}`} isRequired />
        <NumberField name='comision' label={`COMISION ${moneda}`} isRequired />
      </div>
      <SubmitButton content='Guardar' />
    </form>
  );
}

export default RegistrarComisionTemporalForm;