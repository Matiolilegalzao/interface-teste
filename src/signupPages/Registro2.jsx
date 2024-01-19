import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Registro2.module.css"

function AdditionalInfoPage() {
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [cpfIsValid, setCpfIsValid] = useState(true);
  const [rg, setRg] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [semester, setSemester] = useState('');
  const [enrollmentProof, setEnrollmentProof] = useState(null);

  const handleFileUpload = (event) => {
    setEnrollmentProof(event.target.files[0]);
  };

  const handleCpfChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value);
    setCpfIsValid(validateCpf(value));
  };
  const validateCpf = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf === '') return false;
    if (cpf.length !== 11 || 
        cpf === "00000000000" || 
        cpf === "11111111111" || 
        cpf === "22222222222" || 
        cpf === "33333333333" || 
        cpf === "44444444444" || 
        cpf === "55555555555" || 
        cpf === "66666666666" || 
        cpf === "77777777777" || 
        cpf === "88888888888" || 
        cpf === "99999999999")
            return false;
    let add = 0;
    for (let i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (let i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(10)))
        return false;
    return true;
  };

  return (
    <div className="container">
      <form onSubmit={cadastrarUsuario}>
      <h2 className="my-3">Cadastro</h2>
      
      <p>Passo 2 de 2</p>
      
        <label for="endereço" className={styles.labelStyle}>Endereço:<input type='text' className={styles.textInput} id='endereço'></input></label>

        <label for="cpf">CPF:<input type='text' className={styles.textInput} id='cpf' value={cpf} onChange={handleCpfChange} style={{backgroundColor: cpfIsValid ? 'white' : 'rgb(252, 83, 83)'}}></input></label>

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
        if(!validateCpf(cpf)) {
            alert("CPF inválido!")
            return;
        }
        alert("Cadastrado com sucesso!")
        window.location.href = "/meus-documentos"
    }
export default AdditionalInfoPage;