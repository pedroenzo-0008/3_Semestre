import { useState } from "react"
import "./cadfruta.css"
function CadFruta() {

    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: 10},
        { id: 2,nome: "Mamão", quantidade: 20}
    ])

    function Cadastrar(e) {
        e.preventDefault();
        
        setArrFrutas([
            ...arrFrutas,
            { id: Date.now(), nome: fruta, quantidade: quantidade}
        ]);

        limparFormulario();
        return false;
    }

    function limparFormulario() {
        setFruta("")
        setQuantidade(0)
    }



    return (
    <section className="sessao-cadastro">
        <h1>Cadastro</h1>

        <form action="" method="post" onSubmit={Cadastrar}>

        
        <fieldset className="cadastro">
            <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta </label>
            <input 
            type="text" 
            id="fruta" 
            className="cadastro__entrada"
            placeholder="Digite o nome da Fruta"
            onChange={(e) =>{
                setFruta(e.target.value)
            }}
            />
            <label htmlFor="quantidade" className="cadastro__rotulo"> Quantidade </label>
            <input 
            type="number" 
            id="quantidade" 
            className="cadastro__entrada"
            placeholder="Digite a quantidade"
            onChange={(e) =>{
                setQuantidade(Number(e.target.value))
            }}
            />
            <button type="submit"className="cadastro__btn-cadastrar">Cadastrar</button>
            <br />
            <label htmlFor="">{fruta}</label>
        </fieldset>

        </form>


        <ul className="listagem">
            {arrFrutas.map((f) => {
                return (
                <li key={f.id}>
                Fruta:   {f.nome} | Quantidade: {f.quantidade}  </li>
                );
            })}
            
        </ul>
    </section>
    )
}
export default CadFruta