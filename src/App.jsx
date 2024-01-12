import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Sidebar from './components/SideBar.jsx';  // Substitua 'Sidebar' pelo nome real do seu componente
import PaymentPage from './pages/payment.jsx';

import DocumentosPage from './signupPages/Documentos.jsx'; import AdditionalInfoPage from './signupPages/Registro2.jsx';
import PontosPage from './pages/Pontos'; import RegistroPage from './signupPages/Registro.jsx'; import Settings from './pages/Settings'; import Profile from './pages/Profile'; import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <Route path="/registro-1" element={<RegistroPage />} />
            <Route path="/registro-2" element={<AdditionalInfoPage />} />
            <Route path="/meus-documentos" element={<DocumentosPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
};

export default App;
