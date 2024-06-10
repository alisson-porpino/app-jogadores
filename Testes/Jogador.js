import React from "react";
import axios from "axios";

function Jogador(props){
    const excluiJogador = (jogadorId) => {
        axios.delete(`http://127.0.0.1:8000/jogadores/${jogadorId}`)
            .then(
                resposta => {
                    alert("Jogador removido com sucesso " + resposta.data)
                }
            )
    }
    return (
        <div>
            <p>
                <span className="fw-bold">
                    {props.jogador.nome} - {props.jogador.idade} - {props.jogador.time}
                </span>
                <button
                    onClick={()=> excluiJogador(props.jogador.id)}
                    className="btn btn-danger"
                >
                    <span className="badge rounded-pill bg-danger">X</span>
                </button>
            </p>
        </div>
    )
}

export default Jogador;