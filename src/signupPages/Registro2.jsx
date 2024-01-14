import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <h2 className="my-3">Informações Adicionais</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Endereço:</label>
          <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF:</label>
          <input type="text" className="form-control" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">RG:</label>
          <input type="text" className="form-control" value={rg} onChange={(e) => setRg(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Ano de Nascimento:</label>
          <input type="text" className="form-control" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nome da Instituição:</label>
          <input type="text" className="form-control" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Semestre:</label>
          <input type="text" className="form-control" value={semester} onChange={(e) => setSemester(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Atestado de Matrícula:</label>
          <input type="file" className="form-control" onChange={handleFileUpload} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default AdditionalInfoPage;
