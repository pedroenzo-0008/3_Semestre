import "./Botao.css";

function Botao(props) {
  return (
    <button
      className="botao"
      style={{ backgroundColor: props.cor }}
    >
      {props.texto}
    </button>
  );
}

export default Botao;

