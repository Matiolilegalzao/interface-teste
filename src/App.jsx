import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Sidebar from './components/SideBar.jsx';  // Substitua 'Sidebar' pelo nome real do seu componente
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import PontosPage from './pages/Pontos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar></Navbar>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Sidebar />  {/* Substitua 'Sidebar' pelo nome real do seu componente */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pontos-de-onibus" element={<PontosPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
