import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../components/NavBar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // API DE CLIMA

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
  //FIM DA API DE CLIMA
  return (
    <nav>
      {isMobile && <button onClick={toggleMenu}>Menu</button>}

      {(isMobile ? isOpen : true) && (
        <div className={styles.ulContainer}>
          <ul className={`${styles.navbarUl} ${isOpen ? styles.openMenu : ''}`}>
            <li className={styles.navItem}>
              <Link className="nav-link " to="/">Página inicial</Link>
            </li>
            <li className={styles.navItem}>
              <Link className="nav-link " to="/Profile">Meu perfil</Link>
            </li>
            <li className={styles.navItem}>
              <Link className="nav-link " to="/meus-documentos">Documentos</Link>
            </li>
            {!isMobile && <img src='src\images\ilha conectada (2).png' className={styles.ilhaLogo}></img>}
            <li className={styles.navItem}>
              <Link className="nav-link " to="/payment">Planos</Link>
            </li>
              <li className={styles.navItem}>
                <Link className="nav-link " to="/pontos-de-onibus">Pontos</Link>
              </li>
              <li className={styles.navItem}>
              <Link className="nav-link " to="/registro-1">Registrar-se</Link>
            </li>
            </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
