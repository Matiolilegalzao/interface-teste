import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import PontosPage from './pages/Pontos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pontos-de-onibus" element={<PontosPage />} />
      </Routes>
    </Router>
  );
};

export default App;
