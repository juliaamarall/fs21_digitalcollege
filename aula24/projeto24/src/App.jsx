import { useState } from 'react';
import './App.css';
import feliz from './assets/feliz.gif'
import chateado from './assets/chateado.gif'

function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0); // Inicialize o estado de resultado

  function mudarCampo(evento) {
    const { name, value } = evento.target;
    if (name === 'valor1') {
      setValor1(Number(value));
    } else {
      setValor2(Number(value));
    }
  }

  function somar() {
    const res = valor1 + valor2;
    setResultado(res); // Agora esta função está corretamente no lugar
  }
  return (
    <>
      <h1>CALCULADORA</h1>
      <input type="text" id="valor1" name="valor1" onChange={mudarCampo} />
      <input type="text" id="valor2" name="valor2" onChange={mudarCampo} />
      <button onClick={somar}>SOMAR</button>
      <h2>Resultado: {resultado}</h2> {/* Mostra o resultado da soma */}

      { resultado >= 100 
      ? <img src={feliz} height={100} /> 
      : 
      <img src={chateado} height={100}/>}
    </>
  );
}

export default App;
