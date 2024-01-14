// PontosPage.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "../pages/Pontos.module.css";
import SideBar from "../components/SideBar";
import TabelaPontos from "../components/TabelaPontos";

function PontosPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Pontos de onibus</h1>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1MJMCU5IeJllafxr2EqSYt9pDDCOVwbUd&ehbc=2E312F"
          className={styles.map}
          width="640"
          height="480"
        ></iframe>
        <div className={styles.Espaço}></div>
      </div>
      <TabelaPontos className={styles.TabelaPersonalizada} />
    </div>
  );
}

export default PontosPage;
