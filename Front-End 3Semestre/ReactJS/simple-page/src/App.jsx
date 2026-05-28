import './App.css';

function App(params) {
  return(
    
    <nav className="menu">
        <a href="#" className="menu__item">Home</a>
        <a href="#" className="menu__item">Quem Somos</a>
        <a href="#" className="menu__item">Contato</a>
        <a href="#" className="menu__item menu__item--sucess">Entrar</a>
        <a href="#" className="menu__item menu__item--button-default">Cadastrar</a>

        <div className="card-perfil">

        <img className="card-perfil__image" 
        src="./images/Foto-Perfil.jpg" 
        alt="foto de perfil do usuário"/>

    </div>
    </nav>
  );
}


export default App;