import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/Usuario/UsuarioContext";

const Perfil = () => {
  const {usuario, setUsuario} = useContext(UsuarioContext);
  const [novoUsuario, setNovoUsuario] = useState();
  const login = () => {
  localStorage.setItem("usuario", JSON.stringify(novoUsuario))
  setUsuario(novoUsuario)
  setNovoUsuario("")
  }
  return (<div>
      <h2>Página do Perfil ( {usuario} )</h2>
      <input
      value={novoUsuario}
      type="text" placeholder="digite o novo usuário" 
      onChange={(e) => {
        setNovoUsuario(e.target.value)
      }} id="true"/>
      <button

      onClick= {() => {
          setUsuario(novoUsuario)
          login()
      }}
      >Entrar</button>
      <p>Novo usuário: <strong>{novoUsuario}</strong></p>
</div>
  );
};

export default Perfil;