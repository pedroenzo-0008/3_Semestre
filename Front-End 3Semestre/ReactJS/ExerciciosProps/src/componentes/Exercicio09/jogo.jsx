import "./Jogo.css";

function Jogo(props) {
  return (
    <div className="jogo-card">
      <img src={props.imagem} alt={props.nome} />

      <h2>{props.nome}</h2>

      <p>
        <strong>Plataforma:</strong> {props.plataforma}
      </p>

      <p>
        <strong>Preço:</strong> R$ {props.preco}
      </p>
    </div>
  );
}

export default Jogo;