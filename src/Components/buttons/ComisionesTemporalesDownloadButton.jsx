import { GetAllComisionesTemporales } from '../../services/ComisionesTemporalesServices';
import { DownloadFile } from '../../services/DownloadService';
import { CreateDataSheet } from '../../services/ExcelService';
import DownloadButton from './DownloadButton';

/**
 * @param {import('react').MouseEvent<HTMLButtonElement>} event
 */
const handleDownload = async () => {
  try {
    const comisionesTemporales = await GetAllComisionesTemporales();
    const file = await CreateDataSheet(
      'Comisiones_Temporales',
      [
        { name: 'Poliza', filterButton: true },
        { name: 'Factura', filterButton: true },
        { name: 'Fecha', filterButton: true },
        { name: 'Ramo Aseguradora', filterButton: true },
        { name: 'Ramo Sbs', filterButton: true },
        { name: 'Responsable', filterButton: true },
        { name: 'Tipo de Moneda', filterButton: true },
        { name: 'Monto Prima', filterButton: true },
        { name: 'Monto Comision', filterButton: true }
      ],
      comisionesTemporales.map(ct => {
        return [
          ct.getPoliza(),
          ct.getFactura(),
          ct.getFecha(),
          ct.getRamoAseguradora(),
          ct.getRamoSbs(),
          ct.getUsername(),
          ct.getMoneda(),
          ct.getPrima(),
          ct.getComision(),
        ]
      })
    );

    DownloadFile(file);
  } catch (error) {
    console.error(error);
  }
}

function ComisionesTemporalesDownloadButton() {
  return <DownloadButton content='Descargar' onDownload={handleDownload} />
}

export default ComisionesTemporalesDownloadButton;