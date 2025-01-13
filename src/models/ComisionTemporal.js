/**
 * Clase que representa una comisión temporal de seguros.
 * @class ComisionTemporal
 */
class ComisionTemporal {
  #id;
  #poliza;
  #factura;
  #fecha;
  #ramoAseguradora;
  #ramoSbs;
  #moneda;
  #prima;
  #comision;
  #username;

  /**
   * Establece el monto de la prima.
   * @param {number} id - Id del seguro.
   */
  setId(id) {
    this.#id = id;
  }

  /**
   * Obtiene el monto de la prima.
   * @returns {number} Id de la prima.
   */
  getId() {
    return this.#id;
  }

  /**
   * Establece el número de póliza.
   * @param {string} poliza - Número de póliza del seguro.
   */
  setPoliza(poliza) {
    this.#poliza = poliza;
  }

  /**
   * Obtiene el número de póliza.
   * @returns {string} El número de póliza.
   */
  getPoliza() {
    return this.#poliza;
  }

  /**
   * Establece el número de factura.
   * @param {string} factura - Número de factura asociada.
   */
  setFactura(factura) {
    this.#factura = factura;
  }

  /**
   * Obtiene el número de factura.
   * @returns {string} El número de factura.
   */
  getFactura() {
    return this.#factura;
  }

  /**
   * Establece la fecha de la comisión.
   * @param {Date} fecha - Fecha de la comisión.
   */
  setFecha(fecha) {
    this.#fecha = fecha;
  }

  /**
   * Obtiene la fecha de la comisión.
   * @returns {Date} La fecha de la comisión.
   */
  getFecha() {
    return this.#fecha;
  }

  /**
   * Establece el ramo de la aseguradora.
   * @param {string} ramoAseguradora - Ramo según la clasificación de la aseguradora.
   */
  setRamoAseguradora(ramoAseguradora) {
    this.#ramoAseguradora = ramoAseguradora;
  }

  /**
   * Obtiene el ramo de la aseguradora.
   * @returns {string} El ramo de la aseguradora.
   */
  getRamoAseguradora() {
    return this.#ramoAseguradora;
  }

  /**
   * Establece el ramo SBS.
   * @param {string} ramoSbs - Ramo según la clasificación de la SBS.
   */
  setRamoSbs(ramoSbs) {
    this.#ramoSbs = ramoSbs;
  }

  /**
   * Obtiene el ramo SBS.
   * @returns {string} El ramo SBS.
   */
  getRamoSbs() {
    return this.#ramoSbs;
  }

  /**
   * Establece el tipo de moneda.
   * @param {string} moneda - Tipo de moneda (ej: PEN, USD).
   */
  setMoneda(moneda) {
    this.#moneda = moneda;
  }

  /**
   * Obtiene el tipo de moneda.
   * @returns {string} El tipo de moneda.
   */
  getMoneda() {
    return this.#moneda;
  }

  /**
   * Establece el monto de la prima.
   * @param {number} prima - Monto de la prima del seguro.
   */
  setPrima(prima) {
    this.#prima = prima;
  }

  /**
   * Obtiene el monto de la prima.
   * @returns {number} El monto de la prima.
   */
  getPrima() {
    return this.#prima;
  }

  /**
   * Establece el monto de la comisión.
   * @param {number} comision - Monto de la comisión.
   */
  setComision(comision) {
    this.#comision = comision;
  }

  /**
   * Obtiene el monto de la comisión.
   * @returns {number} El monto de la comisión.
   */
  getComision() {
    return this.#comision;
  }

  /**
   * Establece el monto de la comisión.
   * @param {string} username - Monto de la comisión.
   */
  setUsername(username) {
    this.#username = username;
  }

  /**
   * Obtiene el monto de la comisión.
   * @returns {string} El monto de la comisión.
   */
  getUsername() {
    return this.#username;
  }
}

export default ComisionTemporal;