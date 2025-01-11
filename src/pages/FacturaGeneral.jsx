import { useContext,useEffect, useState } from 'react';
import '../styles/FacturaGeneral.css';
import '../styles/Grafico_PrimaSoles.css';
import { Grafico_PrimaSoles } from '../components/Graficos/Grafico_PrimaSoles';
import { Grafico_PrimaDolares } from '../components/Graficos/Grafico_PrimaDolares';
import { Grafico_OficinasPrimas } from '../components/Graficos/Grafico_OficinasPrimas';
import { Grafico_OficinasPrimasDolares } from '../components/Graficos/Grafico_OficinasPrimasDolares';
import { Grafico_RamoSBSPrimaComisiones } from '../components/Graficos/Grafico_RamoSBSPrimaComisiones';
import { Grafico_RamoSBSPrimaComisionesDolares } from '../components/Graficos/Grafico_RamoSBSPrimaComisionesDolares';
import PrimasPorAnio from '../components/PrimasPorAnio';
import ComisionesPorAnio from '../components/ComisionesPorAnio';
import UserContext from '../context/UserContext';




const FacturaGeneral = () => {
  const { username } = useContext(UserContext);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();

      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric',  
        hour12: true 
      };

      const formatted = today.toLocaleDateString('es-ES', options);
      setFormattedDate(formatted);
    };

    // Actualiza la fecha cada segundo
    const intervalId = setInterval(updateDate, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="factura-general-container">
      <div className="user-info">
        <h3>¡Hola, {username} 👋🏼!</h3>
        <div>
          <h4>Resumen de Hoy</h4>
          <p>{formattedDate}</p>
        </div>
      </div><br />
      <section className='containerPC'>
        <PrimasPorAnio />
        <ComisionesPorAnio />
      </section>
      <div className='TodosGraficos'>
        <div>
          <div className='GraficosBloque1'>
            <Grafico_PrimaSoles />
          </div>
          <div className='GraficosBloque1'>
            <Grafico_PrimaDolares />
          </div>
        </div>
        <div>
        <div className='GraficosBloque1'>
            <Grafico_OficinasPrimas />
          </div>
          <div className='GraficosBloque1'>
            <Grafico_OficinasPrimasDolares />
          </div>
        </div>

        <div className='GraficosBloque1 RamoSBSGrafico'>
          <Grafico_RamoSBSPrimaComisiones />
        </div>
        <div className='GraficosBloque1 RamoSBSGrafico'>
          <Grafico_RamoSBSPrimaComisionesDolares />
        </div>
      </div>

      
      
    </div>
  );
};

export default FacturaGeneral;
