import "./Aluno.css";

function Aluno(props) {
  return (
    <div className="aluno-card">
      <img src={props.imagem} alt={props.nome} />

      <h2>{props.nome}</h2>

      <p>{props.curso}</p>
    </div>
  );
}

export default Aluno;