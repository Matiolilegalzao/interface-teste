import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark' : 'navbar-light'}`} style={{ backgroundColor: 'rgb(2, 49, 92)' }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/Profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/payment">Plans</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="registrar-se"><Link to="/registro-1">Registrar-se</Link></p>
      </div>
    </nav>
  );
};

export default Navbar;
