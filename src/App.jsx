import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './providers/UserProvider';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FacturaGeneral from './pages/FacturaGeneral';
import FormFactura from './components/FormFactura';
import FacturaBreve from './pages/FacturaBreve';
import FacturaTable from './components/FacturaTable';
import ComisionesTemporalesPage from './pages/ComisionesTemporalesPage';

import './styles/App.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />

          {/* Dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="graficosfacturaGeneral" element={<FacturaGeneral />} />
            <Route path="formulario" element={<FormFactura />} />
            <Route path="tablafacturaGeneral" element={<FacturaTable />} />
            <Route path="tablafacturacomisiones" element={<FacturaBreve />} />
            <Route path="comisiones-temporales" element={<ComisionesTemporalesPage />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
