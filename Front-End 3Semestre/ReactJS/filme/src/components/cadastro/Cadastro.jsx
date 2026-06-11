import "./Cadastro.css";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form 
                onSubmit={props.funcCadastro} 
                className="layout_grid form_cadastro" 
                encType="multipart/form-data"
            >
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    
                    {/* Campo Nome */}
                    <div className="campo">
                        <label htmlFor="nome">Nome</label>
                        <input 
                            type="text" 
                            id="nome"
                            name="nome" 
                            placeholder={`Digite o nome do ${props.placeholder}`} 
                            value={props.valor}
                            onChange={(e) => props.setValor(e.target.value)}
                        />
                    </div>

                    {/* Campo Gênero */}
                    <div className="campo" style={{ display: props.visibilidade }}>
                        <label htmlFor="genero">Gênero</label>
                        <select 
                            id="genero"
                            name="idGenero" 
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

                    {/* Campo Imagem da capa estilizado */}
                    <div className="campo">
                        <label htmlFor="imagemUpload">Imagem da capa</label>
                        <input 
                            type="file" 
                            id="imagemUpload" 
                            name="imagemUpload" 
                            accept="image/*" 
                            style={{ display: "none" }}
                            onChange={(e) => props.setImagemUpload(e.target.files[0])}
                        />
                        <label htmlFor="imagemUpload" className="file-label">
                            Imagem
                        </label>
                    </div>

                    {/* Botões lado a lado */}
                    <div className="botoes">
                        {props.btneditar && (
                            <Botao 
                                nomeDoBotao="Cancelar"
                                funcBtn={(e) => props.cancelarEdicao(e)}
                                btneditar={props.btneditar}
                            />
                        )}
                        
                        <Botao 
                            nomeDoBotao={props.btneditar ? "Salvar edição" : "Cadastrar"} 
                            funcBtn={(e) => props.funcCadastro(e)} 
                        />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;
