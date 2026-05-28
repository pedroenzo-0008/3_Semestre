import "./Botao.css"

const Botao = (props) => {
    return(

        <button className ="botao" type= {props.btneditar ? "button" : "submit"}
        onClick ={(e) => 
            props.funcBtn(e)
        }>
            {props.nomeDoBotao}
        </button>

    )
}

export default Botao;