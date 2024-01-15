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

  // Resto do seu código...

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
            {!isMobile && <img src='src\images\ilha conectada (2).png' className={styles.ilhaLogo}></img>}
            <li className={styles.navItem}>
              <Link className="nav-link " to="/settings">Registrar-se</Link>
            </li>
            <li className={styles.navItem}>
              <Link className="nav-link " to="/payment">Plans</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
