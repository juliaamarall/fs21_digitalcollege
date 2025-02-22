import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [smile, setSmile] = useState(<span>&#128526;</span>)
  const [contador, setContador] = useState(0)
  
  useEffect(() => {
    document.querySelector('body').style.background = '#CCC'
  }, []);

  useEffect(() => {
    if(contador >= 5 && contador < 10) {
      setSmile(<span>&#128521;</span>)
    } else if(contador >= 10) {
      setSmile(<span>&#128525;</span>)
    } else if ( contador === 0){
      setSmile(<span>&#128557;</span>)
    } else if ( contador < 0) {
      setSmile(<span>&#128555;</span>)
    } else {
      setSmile(<span>&#128526;</span>)
    }
     
    
  }, [contador]);

  return (
    <>
    <div>
    {smile}
    </div>
    <h1>CONTADOR {contador} </h1>
    <button onClick={() => {setContador (contador + 1)}}>AUMENTAR</button>
    <button onClick={() => {setContador (contador - 1)}}>DIMINUIR</button>
    <button onClick={() => {setContador (0)}}>RESETAR</button>
    

    </>
  )
}

export default App
