import './App.css'

import Header from "./components/Header"
import Produto from "./components/Produto"
import { useState } from "react"

function App() {
  const [state, setState] = useState(0)

  const  adicionar = () => {
    setState(state + 1)
  }

  const  remover = () => {
    setState(state - 1)
  }

  const  resetar = () => {
    setState(0)
  }

  return (
    <>
    <section style={{display: "flex", justifyContent:"center", alignItems:"center", padding: 5}}>
      
      <div>
      <div> CONTADOR: {state}</div>
        <div style={{display: "flex"}}>
          <button onClick={adicionar}>ADICIONAR</button>
          <button onClick={remover}>REMOVER</button>
          <button onClick={resetar}>RESETAR</button>
        </div>
      </div>
    </section>
    <div style={{display:"flex", gap: 10, justifyContent: "center" }}>
    <Produto nome="PRODUTO  01" imagem="https://imgcentauro-a.akamaihd.net/768x768/98582431A9.jpg" descricao="BLA BLA BLA BLA BLA BLA" preco="10.99" />
    <Produto nome="PRODUTO  02" imagem="https://imgnike-a.akamaihd.net/768x768/02728552A1.jpg" descricao="BLA BLA BLA BLA BLA BLA" preco="8.90"/>
    <Produto nome="PRODUTO  03" imagem="https://imgnike-a.akamaihd.net/768x768/07941653A2.jpg" descricao="BLA BLA BLA BLA BLA BLA" preco="4.00"/>
    <Produto nome="PRODUTO  04" imagem="https://imgnike-a.akamaihd.net/768x768/011224IJA1.jpg" descricao="BLA BLA BLA BLA BLA BLA" preco="79.90"/>
    </div>
    
    </>
  )
}


export default App
