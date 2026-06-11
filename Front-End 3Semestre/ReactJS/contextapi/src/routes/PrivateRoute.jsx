import { useContext } from "react";
import { UsuarioContext } from "../context/Usuario/UsuarioContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
const { usuario } = useContext(UsuarioContext);

    return usuario ? children : <Navigate to="/" />;
}
export default PrivateRoute;