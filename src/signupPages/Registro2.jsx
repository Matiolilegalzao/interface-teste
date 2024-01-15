import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Registro2.module.css"

function AdditionalInfoPage() {
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [semester, setSemester] = useState('');
  const [enrollmentProof, setEnrollmentProof] = useState(null);

  const handleFileUpload = (event) => {
    setEnrollmentProof(event.target.files[0]);
  };

  return (
    <div className="container">
      <form>
      <h2 className="my-3">Cadastro</h2>
      
      <p>Passo 2 de 2</p>
      
        <label for="endereço" className={styles.labelStyle}>Endereço:<input type='text' className={styles.textInput} id='endereço'></input></label>

        <label for="cpf">CPF:<input type='text' className={styles.textInput} id='cpf'></input></label>


        <label for="rg">RG:<input type='text' className={styles.textInput} id='rg'></input></label>

        <label for="instituicao">Nome da Instituição de ensino:<input type='text' className={styles.textInput} id='instituicao'></input></label>

        <label for="ano-de-nascimento" >Ano de nascimento:<input type='date' id='ano-de-nascimento' className={styles.anoNascimento}></input></label>
        <label for="semestre" className={styles.semestre}>Semestre:
          <select id='semestre' name='semestre' className={styles.selectSemestre}>
            <option value="1° semestre">1° Semestre</option>
            <option value="2° semestre">2° Semestre</option>
            <option value="3° semestre">3° Semestre</option>
            <option value="4° semestre">4° Semestre</option>
            <option value="5° semestre">5° Semestre</option>
            <option value="6° semestre">6° Semestre</option>
            <option value="7° semestre">7° Semestre</option>
            <option value="8° semestre">8° Semestre</option>
            <option value="7° semestre">9° Semestre</option>
            <option value="8° semestre">10° Semestre</option>
          </select>
        </label>
        <input type="submit" value="Continuar"className={styles.registerBtn}></input>
      </form>
    </div>
  );
}
    function cadastrarUsuario(e) {
        e.preventDefault()
        alert("Cadastrado com sucesso!")
        window.location.href = "/meus-documentos"
    }
export default AdditionalInfoPage;
