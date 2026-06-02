import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"
import { ProdutoContext } from "../../context/ProdutoContext"

const Header = () => {
    const {usuario} = useContext(UsuarioContext)

    return (
        <header>
            <nav>
                <Link to="/">Home</Link> {""}
                <Link to="/perfil">Perfil</Link> {""}
                <Link to="/produto">Produto</Link> {""}
                <Link to="/cadastrar-produto">Cadastrar Produto</Link> {""}
                <Link to="/listar-produto">Listar Produto</Link>
            </nav>
            <h2>Bem-vindo, {usuario}</h2>
        </header>
        
    )
}

export default Header
