import "./Cadastro.css";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    
                    {/* Campo Nome */}
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input 
                            type="text" 
                            name="nome" 
                            placeholder={`Digite o nome do ${props.placeholder}`} 
                            value={props.valor}
                            onChange={(e) => props.setValor(e.target.value)}
                        />
                    </div>

                    {/* Campo Gênero (aparece só quando visibilidade = "block") */}
                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <label htmlFor="genero">Gênero</label>
                        <select 
                            name="genero" 
                            value={props.valorSelect} 
                            onChange={(e) => props.setValorSelect(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            {props.listaGeneros && props.listaGeneros.map((genero) => (
                                <option key={genero.idGenero} value={genero.idGenero}>
                                    {genero.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Botão Cancelar (aparece só em modo edição) */}
                    {props.btneditar && (
                        <Botao 
                            nomeDoBotao="Cancelar"
                            funcBtn={(e) => props.cancelarEdicao(e)}
                            btneditar={props.btneditar}
                        />
                    )}
                    
                    {/* Botão Cadastrar */}
                    <Botao nomeDoBotao="Cadastrar" funcBtn={(e) => props.funcCadastro(e)} />
                </div>
            </form>
        </section>
    )
}

export default Cadastro;
