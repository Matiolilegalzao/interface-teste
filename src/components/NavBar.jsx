import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../components/NavBar.module.css"
const Navbar = () => {
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
