import React from "react";
import styles from "./Registro.module.css"
import { useNavigate } from 'react-router-dom';

function RegistroPage() {
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para registrar o usuário

        // Depois de registrar o usuário, redirecione para a página de confirmação de e-mail
        navigate('/confirmar-email');
    };

    return(
        <>
        <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
            <h2>Ilha Conectada</h2>
        </div>
        <div className={styles.rightContainer}>
            <form className={styles.formulario} onSubmit={handleSubmit}>
                <h2>Registrar</h2> <h2>Parte 1</h2>
                <label for="name" className={styles.inputLabel}>Nome completo:<input type="text" required></input></label>
                <label for="senha" className={styles.inputLabel}>Senha:<input type="password" required></input></label>
                <label for="email" className={styles.inputLabel}>Email:<input type="email"  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required   title="Por favor, insira um endereço de e-mail válido."></input></label>
                <label for="termos" className={styles.termosLabel}><input type="radio" required className={styles.termos}></input>Eu aceito os termos e condições</label>
                <input type="submit" value="Registrar" className={styles.signupBtn}></input>
            </form>
        </div>
        </div>
        </>
    )
}

export default RegistroPage;
