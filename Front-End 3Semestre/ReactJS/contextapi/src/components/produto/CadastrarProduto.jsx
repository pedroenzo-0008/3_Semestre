import { useContext, useState } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const CadastrarProduto = () => {
    const {listarProduto, setListarProduto} = useContext(ProdutoContext)
    const [novoProduto, setNovoProduto] = useState("");

    return (

        <div>
            <h2>Pagina de Cadastrar Produto</h2>
            <input type="text"
                onChange={(e) => {
                    setNovoProduto(e.target.value)
                }} 
            />

            <button onClick={() => {
                setListarProduto([...listarProduto, novoProduto])
            }}>Cadastrar</button>

            <p>Produto que será cadastrado: {novoProduto}</p>
        </div>
    )
}

export default CadastrarProduto