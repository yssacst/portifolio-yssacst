import React from "react";
import "../css/cardFormacao.css"

const CardFormacao = (props) => {
    return(
        <div className="container">
            <h3>{props.curso}</h3>
            <p>{props.instituicao}</p>
            <p>{props.nivel}</p>
            <h4>{props.situacao}</h4>
        </div>
    )

}

export default CardFormacao;