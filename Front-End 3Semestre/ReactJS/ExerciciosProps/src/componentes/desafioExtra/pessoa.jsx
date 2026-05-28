import "./Pessoa.css";

function Pessoa(props) {
  return (
    <div className="pessoa-card">
      <img src={props.foto} alt={props.nome} />

      <h2>{props.nome}</h2>

      <p>
        <strong>Idade:</strong> {props.idade}
      </p>

      <p>
        <strong>Cidade:</strong> {props.cidade}
      </p>
    </div>
  );
}

export default Pessoa;