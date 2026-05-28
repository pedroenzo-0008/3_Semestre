import { useState } from "react";
import Contador from "../componentes/contador/contador";
import CadFruta from "../componentes/contador/cadFruta/cadFruta";
import CicloDeVida from "../componentes/ciclodevida/ciclodevida";

function App (){
  const [mostrar, SetMostrar] = useState(true);

  const[nome, setNome] = useState("Google")
  
function mudarTexto(){
  setNome("microsoft")
}

function fuiAbandonado(){
  setNome("Input foi abandonado :(")
}

  return( 
    <>
  {/* <h1>{nome} Page</h1>
  <button onClick={mudarTexto}>Mudar Texto</button>
  <button onClick={() => {return setNome("Instagram")}}>Mudar Texto 2</button>

  <br />
  <input
   type="text" onBlur={fuiAbandonado}
   onChange={(e) => setNome(e.target.value)} /> */}


{/* 
    <Contador />
    <br /><br />
    <p>Lorem ipsum, dolor <strong>{nome}</strong></p> */}

    {/* <CadFruta /> */}

    <button onClick={() => {
      SetMostrar (! mostrar);
    }}>Mostrar / Ocultar</button>
    {mostrar && <CicloDeVida/>}
  </>

  
    
)
  }

export default App;