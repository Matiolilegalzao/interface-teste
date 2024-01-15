import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../components/NavBar.module.css"
const Navbar = () => {

  const apiKey = 'efe9176835deb11d716d95b618adaa69';
  const latitude =  -20.4265;
  const longitude = -51.3448;
  const unidade = 'metric';

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unidade}&appid=${apiKey}`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Aqui você pode acessar os dados do clima, como data.main.temp para a temperatura, etc.
    const temperatura = data.main.temp;
    const descricao = data.weather[0].description;

    // Exemplo de exibição no console
    console.log(`temperatura: ${temperatura}`);
  })
  .catch(error => console.error('Erro ao obter dados:', error));
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

export default NavbarComponent;
