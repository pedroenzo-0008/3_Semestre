import { useContext } from "react";
import { UsuarioContext } from "../../context/Usuario/UsuarioContext";
import { ProdutoContext } from "../../context/Produtos/ProdutoContext";

const Produto = () => {
    const {produtos} = useContext(ProdutoContext)
    const {usuario} = useContext(UsuarioContext)
  return (<>
    <h2>Página do Produto</h2>
    <p>Bem vindo, {usuario}!</p>
  </>);
};

export default Produto;