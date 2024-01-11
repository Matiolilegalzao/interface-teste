import React, { useState, useEffect } from 'react';
import styles from "./Home.module.css"

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
       
        <table className={styles.tabelaPontos}>
          <thead>
            <tr>
              <th>Pontos</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Morada do Sol</td>
              <td>17:55</td>
            </tr>
            <tr>
              <td>Rua 21 de Abril - Ponto 1</td>
              <td>18:00</td>
            </tr>
            <tr>
              <td>Santo Expedito</td>
              <td>18:00</td>
            </tr>
            <tr>
              <td>Rua 21 de Abril - Ponto 2</td>
              <td>18:03</td>
            </tr>
            <tr>
              <td>Rua Olavo Bilac</td>
              <td>18:06</td>
            </tr>
            <tr>
              <td>Jardim Novo Horizonte</td>
              <td>18:07</td>
            </tr>
            <tr>
              <td>Bom Preço</td>
              <td>18:08</td>
            </tr>            <tr>
              <td>Avenida Brasil Norte - Ponto 1</td>
              <td>18:09</td>
            </tr>
            <tr>
              <td>Rua Vinte e Quatro</td>
              <td>18:10</td>
            </tr>
            <tr>
              <td>Avenida Brasil Norte - Ponto 2</td>
              <td>18:11</td>
            </tr>
            <tr>
              <td>Avenida Brasil Norte - Ponto 3</td>
              <td>18:12</td>
            </tr>
            <tr>
              <td>Avenida Brasil Norte - Ponto 4</td>
              <td>18:13</td>
            </tr>
            <tr>
              <td>Praça dos Paiaguás - Ponto 5</td>
              <td>18:14</td>
            </tr>
            <tr>
              <td>Avenida Brasil Sul - Ponto 6</td>
              <td>18:17</td>
            </tr>
            <tr>
              <td>Avenida Brasil Sul | Colégio Urubupungá - Ponto 7</td>
              <td>18:20</td>
            </tr>
          </tbody>
        </table>
       </div>
    </>
  );
};

export default Home;
