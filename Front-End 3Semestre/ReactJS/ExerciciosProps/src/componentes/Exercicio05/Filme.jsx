import "./Filme.css";

function Filme(props) {
  return (
    <div className="filme-card">
      <h2>{props.titulo}</h2>

      <p>
        <strong>Ano:</strong> {props.ano}
      </p>

      <p>
        <strong>Gênero:</strong> {props.genero}
      </p>

      <p>
        <strong>Nota:</strong> {props.nota}
      </p>
    </div>
  );
}

export default Filme;