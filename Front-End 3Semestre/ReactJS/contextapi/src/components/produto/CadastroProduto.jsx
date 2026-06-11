import { useContext, useState } from "react";
import "./CadastroProduto.css";
import { ProdutoContext } from "../../context/Produtos/ProdutoContext";
export const CadastroProduto = () => {
  const { produtos, setProdutos } = useContext(ProdutoContext);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  return (
    <div className="cadastro-card">
      <h2>Cadastro de Produto</h2>

      <form>
        <div className="form-group">
          <label>Nome do produto</label>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do produto"
          />
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição do produto"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Preço</label>
          <input
            type="number"
            name="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Digite o preço do produto"
          />
        </div>

        <button
          className="btn-cadastrar"
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            setProdutos([
              ...produtos,
              {
                nome,
                descricao,
                preco,
              },
            ]);

            setNome("");
            setDescricao("");
            setPreco("");
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};
export default CadastroProduto;