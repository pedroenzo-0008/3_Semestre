import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilme/cadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import Login from "../pages/login/login"

const Rotas = ()=> {
    return(
        <BrowserRouter>
        <Routes>
            <Route element= {<Login />} path= "/"/>
            <Route element= {<CadastroFilme />} path= "/filmes"/>
            <Route element= {<CadastroGenero />} path= "/generos"/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas