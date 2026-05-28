import { useState } from "react";
import "./contador.css"

const Contador = () => {
    const [valor, setValor] = useState(0)

    function incremento() {
        if (valor <= 10) {
            setValor(valor + 1)
        } else {
            setValor(0)
        }
         
    }

    function decremento() {
        if (valor > 10) {
            setValor(valor - 1)
        } else {
            setValor(0)
        }
    }
    return(

        <>
        <p>Contagem: {valor}</p>
        <button onClick={() => {return incremento()}}>++</button> 
        <br />
        <button onClick={() => {return decremento()}}>--</button>

        
        </>

        
    )
}

export default Contador