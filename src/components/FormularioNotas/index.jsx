import React, { useState } from "react";
import "./style.css"

function Formulario(props) {
  const [titulo, setTitulo] = useState('')
  const [desc, setDesc] = useState('')
  return (
    <div
      className="form"
    >
      <input
        placeholder="Título"
        className="form-input"
        value={titulo}
        onChange={e=>setTitulo(e.target.value)}
        />
      <textarea
        placeholder="Escreva sua nota..."
        className="form-textarea"
        value={desc}
        onChange={e=>setDesc(e.target.value)}
        />
      <button
        className="form-button" onClick={()=>props.criarNota(titulo, desc)}>Criar Nota</button>
    </div>
  );
}

export default Formulario;
