import React, { useState, useEffect } from 'react';
import styles from "./Temp.module.css"

const Temp = () => {
  const [temperatura, setTemperatura] = useState('xx'); // Estado inicial 'xx'

  useEffect(() => {
    // Função para buscar a temperatura da API
    const fetchTemperature = async () => {
      try {
        const apiKey = 'efe9176835deb11d716d95b618adaa69';
        const latitude = -20.4265;
        const longitude = -51.3448;
        const unidade = 'metric';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unidade}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        // Atualiza o estado da temperatura
        setTemperatura(`${data.main.temp}°C`);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    // Chama a função de busca de temperatura ao montar o componente
    fetchTemperature();

    // Define um intervalo para buscar a temperatura a cada X segundos
    const intervalId = setInterval(fetchTemperature, 60000); // Atualiza a cada 1 minuto

    // Limpa o intervalo ao desmontar o componente para evitar vazamentos de memória
    return () => clearInterval(intervalId);
  }, []); // O array de dependências está vazio, então o efeito é executado apenas uma vez

  return (
    <div className={styles.tempContainer}>
      <p className={styles.tempName}>
        Ilha Solteira: 
      </p>

      <span className={styles.tempValue} id='tempValue'>{temperatura}</span>
    </div>
  );
};

export default Temp;
