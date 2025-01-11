import { useState } from 'react';

import TextField from '../fields/TextField';
import NumberField from '../fields/NumberField';
import OptionsField from '../fields/OptionsField';

import ramosCia from '../../constants/ramoCia';
import ramosSbs from '../../constants/ramoSbs';
import monedas from '../../constants/monedas';
import DateField from '../fields/DateField';

import '../../styles/forms/ComisionesTemporalesForm.css';
import SubmitButton from '../buttons/SubmitButton';

/**
 * Represents a HandleSubmit
 * @param {import("react").FormEvent} event - The event
*/
const handleSubmit = (event) => {
  event.preventDefault();
}

function ComisionesTemporalesForm() {
  const [moneda, setMoneda] = useState('SOLES');

  return (
    <form className='comisiones-temporales-form' onSubmit={handleSubmit}>
      <div className='comisiones-temporales-form_grid-to-two'>
        <TextField name='poliza' label='POLIZA' />
        <TextField name='factura' label='FACTURA' />
      </div>
      <div className='comisiones-temporales-form_grid-to-three'>
        <DateField name='fecha' label='FECHA' />
        <OptionsField name='ramo_aseguradora' label='RAMO ASEGURADORA' options={ramosCia} />
        <OptionsField name='ramo_sbs' label='RAMO SBS' options={ramosSbs} />
      </div>
      <div className='comisiones-temporales-form_grid-to-three'>
        <OptionsField name='moneda' label='MONEDA' options={monedas} defaultValue={moneda} setValue={setMoneda} />
        <NumberField name='prima' label={`PRIMA ${moneda}`} />
        <NumberField name='comision' label={`COMISION ${moneda}`} />
      </div>
      <SubmitButton content='Guardar' />
    </form>
  );
}

export default ComisionesTemporalesForm;