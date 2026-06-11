import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/services.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/Login", {
                Email: email,   // igual ao DTO
                Senha: senha    // igual ao DTO
            });

            if (response.status === 200) {
                // salva token e email no LocalStorage
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("email", email);

                // redireciona para cadastro de filmes
                navigate("/cadastro-filmes");
            } else {
                alert("Email ou senha inválidos");
            }
        } catch (error) {
            console.error("Erro ao logar:", error);
            alert("Erro no login");
        }
    };

    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <form className="form_login" onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite sua senha"
                            />
                        </div>
                    </div>
                    <div className="botoes">
                        <button type="submit">Entrar</button>
                        <button type="button" onClick={() => { setEmail(""); setSenha(""); }}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Login;
