import React from "react";
import './style.css'

function CardNota(props){
  return (
    <li className="li-li" >
      <section className="section-li">
        <header className="header-li">
          <h3 className="h3-li">{props.nota.titulo}</h3>
        </header>
        <p className="p-li">{props.nota.desc}</p>
      </section>
    </li>
  )
}

export default CardNota;
