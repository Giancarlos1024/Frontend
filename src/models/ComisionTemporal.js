class ComisionTemporal {
  #poliza;
  #factura;
  #fecha;
  #ramoAseguradora;
  #ramoSbs;
  #moneda;
  #prima;
  #comision;

  setPoliza(poliza) {
    this.#poliza = poliza;
  }

  getPoliza() {
    return this.#poliza;
  }

  setFactura(factura) {
    this.#factura = factura;
  }

  getFactura() {
    return this.#factura;
  }

  setFecha(fecha) {
    this.#fecha = fecha;
  }

  getFecha() {
    return this.#fecha;
  }

  setRamoAseguradora(ramoAseguradora) {
    this.#ramoAseguradora = ramoAseguradora;
  }

  getRamoAseguradora() {
    return this.#ramoAseguradora;
  }

  setRamoSbs(ramoSbs) {
    this.#ramoSbs = ramoSbs;
  }

  getRamoSbs() {
    return this.#ramoSbs;
  }

  setMoneda(moneda) {
    this.#moneda = moneda;
  }

  getMoneda() {
    return this.#moneda;
  }

  setPrima(prima) {
    this.#prima = prima;
  }

  getPrima() {
    return this.#prima;
  }

  setComision(comision) {
    this.#comision = comision;
  }

  getComision() {
    return this.#comision;
  }
}

export default ComisionTemporal;