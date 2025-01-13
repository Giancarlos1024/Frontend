import ComisionTemporal from '../models/ComisionTemporal';

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;
const BACKEND_ROUTE = Object.freeze({
  ComisionTemp: BACKEND_URL + '/temporales/comisiontemp',
  GuardarComision: BACKEND_URL + '/temporales/guardarcomision',
  BorrarComision: BACKEND_URL + '/temporales/borrarcomision',
  ActualizarComision: BACKEND_URL + '/temporales/actualizarcomision'
});


/**
 * @param {ComisionTemporal} comisionTemporal - The comision temporal
 * @returns {Promise<boolean>}
 */
export async function SaveComisionTemporal(comisionTemporal) {
  const response = await fetch(BACKEND_ROUTE.GuardarComision, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      poliza: comisionTemporal.getPoliza(),
      n_factura: comisionTemporal.getFactura(),
      fecha: comisionTemporal.getFecha(),
      ramo_asegurador: comisionTemporal.getRamoAseguradora(),
      ramo_sbs: comisionTemporal.getRamoSbs(),
      moneda: comisionTemporal.getMoneda(),
      monto_prima: comisionTemporal.getPrima(),
      monto_comision: comisionTemporal.getComision(),
      nombre_usuario: globalThis.localStorage.getItem('username')
    })
  });
  
  return response.ok;
}

/**
 * @returns {Promise<ComisionTemporal[]>}
*/
export async function GetAllComisionesTemporales() {
  const response = await fetch(BACKEND_ROUTE.ComisionTemp, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok)
    return;
  
  const json = await response.json();
  
  return json.map(ct => {
    const comisionTemporal = new ComisionTemporal();
    comisionTemporal.setId(ct.id);
    comisionTemporal.setPoliza(ct.poliza);
    comisionTemporal.setFactura(ct.n_factura)
    comisionTemporal.setFecha(ct.fecha);
    comisionTemporal.setRamoAseguradora(ct.ramo_asegurador);
    comisionTemporal.setRamoSbs(ct.ramo_sbs);
    comisionTemporal.setMoneda(ct.moneda);
    comisionTemporal.setPrima(ct.monto_prima);
    comisionTemporal.setComision(ct.monto_comision);
    comisionTemporal.setUsername(ct.nombre_usuario);
    
    return comisionTemporal;
  });
}

export async function DeleteComisionTemporal(id) {
  const response = await fetch(BACKEND_ROUTE.BorrarComision, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id })
  });

  return response.ok;
}

/**
 * @param {ComisionTemporal} comisionTemporal - The comision temporal
 * @returns {Promise<boolean>}
 */
export async function UpdateComisionTemporal(comisionTemporal) {
  const response = await fetch(BACKEND_ROUTE.ActualizarComision, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      poliza: comisionTemporal.getPoliza(),
      n_factura: comisionTemporal.getFactura(),
      fecha: comisionTemporal.getFecha(),
      ramo_asegurador: comisionTemporal.getRamoAseguradora(),
      ramo_sbs: comisionTemporal.getRamoSbs(),
      moneda: comisionTemporal.getMoneda(),
      monto_prima: comisionTemporal.getPrima(),
      monto_comision: comisionTemporal.getComision(),
      nombre_usuario: globalThis.localStorage.getItem('username'),
      id: comisionTemporal.getId()
    })
  });
  
  return response.ok;
}