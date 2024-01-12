import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Sidebar from './components/SideBar.jsx';
import PaymentPage from './pages/payment.jsx';

import DocumentosPage from './pages/Documentos.jsx';
import PontosPage from './pages/Pontos'; import RegistroPage from './pages/Registro.jsx'; import Settings from './pages/Settings'; import Profile from './pages/Profile'; import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdditionalInfoPage from './pages/Registro2.jsx';
import PaymentOpt from './pages/paymentOptions.jsx';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar></Navbar>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pontos-de-onibus" element={<PontosPage />} />
            <Route path="/registro" element={<RegistroPage />} />
            <Route path="/meus-documentos" element={<DocumentosPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/payment-options" element={< PaymentOpt />} />
            <Route path="/registro2" element={<AdditionalInfoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
};

export default App;
