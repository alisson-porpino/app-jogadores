import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import JogadorList from './components/JogadorList';

function App() {

  const [jogadorList, setJogadorList] = useState([{}]);
  const [jogadorNome, setJogadorNome] = useState('');
  const [jogadorIdade, setJogadorIdade] = useState('');
  const [jogadorTime, setJogadorTime] = useState('');

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/jogadores')
      .then(resposta => {
        console.log(resposta.data)
        setJogadorList(resposta.data)
      }).catch(
        (error) => {console.log(error)}
      )
  });
  
  const adicionaJogador = () =>{
    const jogador = {
      'jogador_nome': jogadorNome,
      'jogador_idade': jogadorIdade,
      'jogador_time': jogadorTime
    }
    axios.post('http://127.0.0.1:8000/jogadores', jogador)
      .then(resposta => {
        alert(resposta);
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  return (
    <div className='container'>
      <div
        className='mt-3 justify-content-center align-items-center mx-auto'
        style={{ "width": "60vw", "backgroundColor":"#ffffff"}}
      >
        <h2 className='text-center text-white bg-success card mb-2 pb-2'>Gerenciamento de Jogadores</h2>
        <h6 className='card text-center text-white bg-success mb-2 pb-2'>Informações de Jogador</h6>
        <div className='card-body text-center'>
          <h5 className='card text-center text-white bg-dark mb-2 pb-1'>Cadastro do Jogador</h5>
          <span className='card-text'>
            <input 
              onChange={ evento => setJogadorNome(evento.target.value) }
              className='mb-2 form-control' placeholder='Informe o Nome'
            />
            <input 
              onChange={ evento => setJogadorIdade(evento.target.value) }
              className='mb-2 form-control' placeholder='Informe a Idade'
            />
            <input 
              onChange={ evento => setJogadorTime(evento.target.value) }
              className='mb-2 form-control' placeholder='Informe o Time'
            />
            <button 
              onClick={adicionaJogador}
              className='btn btn-outline-success mb-4'>
                Cadastrar
            </button>
          </span>
          <h5 className='card text-center text-white bg-dark mb-4 pb-1'>Lista de Jogadores</h5>
          <div>
            <JogadorList jogadorList={jogadorList}/>
          </div>
        </div>
        <h6 className='card text-center text-light bg-success py-1'>&copy; CodeTI - 2023</h6>
      </div>
    </div>
  );
}

export default App;
