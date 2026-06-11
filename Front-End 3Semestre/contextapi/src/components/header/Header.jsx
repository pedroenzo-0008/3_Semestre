import { Link } from "react-router-dom";
import { UsuarioContext } from "../../context/Usuario/UsuarioContext";
import { useContext } from "react";

const Header = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)
    const logout = () => {
        setUsuario(null)
        localStorage.removeItem("usuario")
    }
  return (
      <header>
          <nav>
            <Link to="/">Home  |  </Link>
            <Link to="/perfil">Perfil  |  </Link>
            <Link to="/produto">Produto  |  </Link>
            <Link to="/cadastro">Cadastro  |  </Link>
            <Link to="/lista">Lista Produto</Link>
          </nav>
          <h2>Bem vindo, {usuario ? usuario : "Visitante"}
            <br />
            <button style={{color : "black"}} onClick={() => {logout()}} >Sair</button>
          </h2>
      </header>
  );
};

export default Header;