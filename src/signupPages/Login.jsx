import React from "react";
import styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para registrar o usuário

        // Depois de registrar o usuário, redirecione para a página de confirmação de e-mail
        navigate('/registro-2');
    };

    return(
        <>
        <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
            <h2>Ilha Conectada</h2>
            <img src="src\images\ilhaconectada.png" className={styles.image}></img>
        </div>
        <div className={styles.rightContainer}>
            <form className={styles.formulario} onSubmit={handleSubmit}>
                <h1>Entrar</h1>
                <label for="name" className={styles.inputLabel}>Email:<input type="text" required></input></label>
                <label for="senha" className={styles.inputLabel}>Senha:<input type="password" required></input></label>


                <input type="submit" value="Continuar" className={styles.signupBtn}></input>
            </form>
            <div className={styles.loginLabel}>Não possui conta? <Link to="/registro-1"> Cadastrar-se</Link></div>
        </div>
        </div>
        </>
    )
    function cadastrarUsuario(e) {
        e.preventDefault()
        alert("Cadastrado com sucesso!")
        window.location.href = "/registro-2"
    }
}

export default LoginPage;
