import { useContext } from "react";
import { ProdutoContext } from "../../context/Produtos/ProdutoContext";
import "./CadastroProduto.css";

const ListarProduto = () => {
  const { produtos } = useContext(ProdutoContext);
  return (
    <div className="lista-card">
      <h2>Produtos Cadastrados</h2>

      <ul className="produtos-lista">
        {produtos.map((produto, index) => (
          <li className="produto-card" key={index}>
            <h3>{produto.nome}</h3>

            <p>{produto.descricao}</p>

            <p className="preco">R$ {produto.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListarProduto;