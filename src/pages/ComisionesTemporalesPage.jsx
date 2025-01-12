import ComisionesTemporalesDownloadButton from "../components/buttons/ComisionesTemporalesDownloadButton";
import ComisionesTemporalesForm from "../components/forms/ComisionesTemporalesForm";
import '../styles/pages/ComisionesTemporalesPage.css';

function ComisionesTemporalesPage() {
  return (
    <div className="comisiones-temporales-page">
      <header className="comisiones-temporales-page__header">
        <h1>Ingresar Detalle de Comisión Temporal</h1>
        <ComisionesTemporalesDownloadButton />
      </header>
      <ComisionesTemporalesForm />
    </div>
  );
}

export default ComisionesTemporalesPage;