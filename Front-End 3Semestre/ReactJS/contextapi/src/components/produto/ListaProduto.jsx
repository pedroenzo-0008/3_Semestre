

import { useContext } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const ListarProduto = () => {
    const {listarProduto} = useContext(ProdutoContext)
    return (
        <>
        <h2>Pagina de Listar Produto</h2>
        {listarProduto.map((item) => {
            return (
                <p>{item}</p>
            )
        })} 
        </>
    )
}

export default ListarProduto