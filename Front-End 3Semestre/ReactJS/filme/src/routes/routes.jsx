import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/CadastroGenero/CadastroGenero";
import PrivateRoute from "./PrivateRoute";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        
        <Route 
          path="/cadastro-filmes" 
          element={
            <PrivateRoute>
              <CadastroFilme />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/cadastro-generos" 
          element={
            <PrivateRoute>
              <CadastroGenero />
            </PrivateRoute>
          } 
        />

        {/* Redireciona para login se rota não existir */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
