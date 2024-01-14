import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <nav>

      <div className={styles.ulContainer}>

        <ul className={styles.navbarUl}>
          
          <li className={styles.navItem}>
            <Link className="nav-link " to="/">Página inicial</Link>
          </li>
          <li className={styles.navItem}>
            <Link className="nav-link " to="/Profile">Meu perfil</Link>
          </li>
          <img src='src\images\ilha conectada (2).png' className={styles.ilhaLogo}></img>
          <li className={styles.navItem}>
            <Link className="nav-link " to="/settings">Registrar-se</Link>
          </li>
          <li className={styles.navItem}>
            <Link className="nav-link " to="/payment">Plans</Link>
          </li>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
