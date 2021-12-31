import React from "react";
import CardNota from "../CardNota"
import "./style.css"

function ListaDeNotas(props){
  let nun = 1;
  return (
    <ul className="list">
      {props.nota && props.nota.map(i=>
        <CardNota key={nun++} nota={i}/>
      )}
    </ul>
  )
}

export default ListaDeNotas;
