function Produto(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Preço: R$ {props.preco}</p>
      <p>{props.descricao}</p>
    </div>
  );
}

export default Produto;