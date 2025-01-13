import ComisionesTemporalesDownloadButton from "../components/buttons/ComisionesTemporalesDownloadButton";
import ComisionTemporalModal from "../components/modals/ComisionTemporalModal";

import ComisionesTemporalesTable from "../components/tables/ComisionesTemporalesTable";
import '../styles/pages/ComisionesTemporalesPage.css';

function ComisionesTemporalesPage() {
  return (
    <div className="comisiones-temporales-page">
      <header className="comisiones-temporales-page__header">
        <div className="comisiones-temporales-page__header__title">
          <h1>Comisiones Temporales</h1>
          <h3>Detalles de Registros</h3>
        </div>
        <div className="comision-temporales-page__actions">
          <ComisionesTemporalesDownloadButton />
          <ComisionTemporalModal />
        </div>
      </header>
      <ComisionesTemporalesTable />
    </div>
  );
}

export default ComisionesTemporalesPage;