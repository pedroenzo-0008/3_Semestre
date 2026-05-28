import "./Contato.css";

function Contato(props) {
  return (
    <div className="contato-card">
      <h2>{props.nome}</h2>

      <p>
        <strong>Telefone:</strong> {props.telefone}
      </p>

      <p>
        <strong>Email:</strong> {props.email}
      </p>
    </div>
  );
}

export default Contato;