import ComisionTemporal from '../models/ComisionTemporal';

/**
 * @param {ComisionTemporal} comisionTemporal - The comision temporal
 * @returns {boolean}
 */
export function SaveComisionTemporal(comisionTemporal) {
  
}

/**
 * @returns {ComisionTemporal[]}
*/
export function GetAllComisionesTemporales() {
  const comisionTemporal = new ComisionTemporal();
  const comisionesTemporales = [comisionTemporal];

  return comisionesTemporales;
}