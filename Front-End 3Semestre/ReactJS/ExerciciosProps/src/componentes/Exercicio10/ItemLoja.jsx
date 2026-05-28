import "./ItemLoja.css";

function ItemLoja(props) {
  return (
    <div className="item-card">
      <h2>{props.nome}</h2>

      <p>
        <strong>Preço:</strong> R$ {props.preco}
      </p>

      <p>
        <strong>Categoria:</strong> {props.categoria}
      </p>

      <p>
        <strong>Estoque:</strong> {props.estoque}
      </p>

      <p className={props.estoque > 0 ? "disponivel" : "indisponivel"}>
        {props.estoque > 0
          ? "Produto disponível"
          : "Produto indisponível"}
      </p>
    </div>
  );
}

export default ItemLoja;