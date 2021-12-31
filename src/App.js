import React, { useState } from "react";
import Formulario from "./components/FormularioNotas";
import ListaDeNotas from "./components/ListaDeNotas";
import "./App.css";

function App() {

  const [notas, setNotas] = useState([])  

  function criarNota (titulo, desc){
    const novaNota = {titulo,desc}
    const nota = [...notas, novaNota]
    setNotas(nota)
    console.log(notas)
    return
  }
  
  return (
    <section>
      <Formulario criarNota={criarNota}/>
      <ListaDeNotas nota={notas} />
    </section>
  );
}
export default App;
