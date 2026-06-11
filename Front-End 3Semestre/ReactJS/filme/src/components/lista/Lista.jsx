import "./Lista.css";

// Importação de ícones:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    return (
        <section className="layout_grid">
            <div className="listagem">

                <h1>{props.tituloLista}</h1>
                <hr />
                <div className="tabela">
                    <table>
                        <thead>
                            <tr className="table_cabecalho">
                                <th>Nome</th>
                                <th style={{ display: props.visibilidade }}>Gênero</th>
                                <th>Imagem</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item) => (
                                    <tr
                                        className="item_lista"
                                        key={props.tipoLista === "filme" ? item.idFilme : item.idGenero}
                                    >
                                        <td data-cell="Nome">
                                            {props.tipoLista === "genero" ? item.nome : item.titulo}
                                        </td>
                                        <td data-cell="Gênero" style={{ display: props.visibilidade }}>
                                            {props.tipoLista === "filme"
                                                ? (item.idGeneroNavigation?.nome || '-')
                                                : '-'}
                                        </td>
                                        <td data-cell="Imagem">
                                            {props.tipoLista === "filme" && item.urlImagem ? (
                                                <img
                                                    src={item.urlImagem}
                                                    alt={item.titulo}
                                                    className="miniatura_filme"
                                                />
                                            ) : (
                                                "-"
                                            )}
                                        </td>

                                        <td data-cell="Editar">
                                            <button className="icon" onClick={() => props.funcPreEditar(item)}>
                                                <img src={Editar} alt="Editar" />
                                            </button>
                                        </td>
                                        <td data-cell="Excluir">
                                            <button className="icon" onClick={() => props.funcExcluir(item)}>
                                                <img src={Excluir} alt="Excluir" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Nenhum registro encontrado.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Lista;
