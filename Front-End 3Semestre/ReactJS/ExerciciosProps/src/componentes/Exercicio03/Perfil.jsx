import "./Perfil.css";

function Perfil(props) {
  return (
    <div className="card">
      <h2>{props.nome}</h2>
      <p><strong>Idade:</strong> {props.idade} anos</p>
      <p><strong>Profissão:</strong> {props.profissao}</p>
    </div>
  );
}

export default Perfil;