import React, { useState, useEffect } from 'react';
import styles from "./Home.module.css"
import TabelaPontos from '../components/TabelaPontos';

const Home = () => {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const horaAtual = new Date();
      const hours = horaAtual.getHours();
      const minutes = horaAtual.getMinutes();

      let saudacao = "";
      if (minutes > 9) {
        if (hours < 12) {
          saudacao = `Agora são ${hours}:${minutes}, bom dia!`;
        } else if (hours < 18) {
          saudacao = `Agora são ${hours}:${minutes}, boa tarde!`;
        } else {
          saudacao = `Agora são ${hours}:${minutes}, boa noite!`;
        }
      } else {
        if (hours < 12) {
          saudacao = `Agora são ${hours}:0${minutes}, bom dia!`;
        } else if (hours < 18) {
          saudacao = `Agora são ${hours}:0${minutes}, boa tarde!`;
        } else {
          saudacao = `Agora são ${hours}:0${minutes}, boa noite!`;
        }
      }

      setHora(saudacao);
    }, 1000); // Atualiza a cada segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Bem vindo, usuário</h1>
        <h2 id="hora" className={styles.horario}>{hora}</h2>
        <TabelaPontos></TabelaPontos>
       </div>
    </>
  );
};

export default Home;
