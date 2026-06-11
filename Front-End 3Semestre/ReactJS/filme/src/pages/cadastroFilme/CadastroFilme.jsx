import "./cadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../services/services.js"
import Lista from "../../components/lista/Lista"
import Swal from "sweetalert2"

const CadastroFilmes = () => {

    // states
    const [valor, setValor] = useState("")              // Nome do filme
    const [generoSelecionado, setGeneroSelecionado] = useState("") // IdGenero
    const [imagemUpload, setImagemUpload] = useState(null) // Imagem da capa
    const [listaGeneros, setListaGeneros] = useState([])
    const [listaFilmes, setListaFilmes] = useState([])

    const [editar, setEditar] = useState(false)
    const [idEditar, setIdEditar] = useState(0)

    


    // cadastrar filme
    const cadastrarFilme = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0 || generoSelecionado === "") {
            Swal.fire({
                title: "Cadastro de Filme",
                text: "Nome e gênero são obrigatórios",
                icon: "warning"
            });
            return;
        }

        const formData = new FormData();
        formData.append("Nome", valor);
        formData.append("IdGenero", generoSelecionado);
        if (imagemUpload) {
            formData.append("ImagemUpload", imagemUpload);
        }


        try {
            const retornoAPI = await api.post("/Filme", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (retornoAPI.status === 201) {
                Swal.fire({
                    title: "Cadastro de Filme",
                    text: `(${valor}) foi cadastrado`,
                    icon: "success"
                });
                limparFormulario();
                getFilmes();
            } else {
                Swal.fire({
                    title: "Cadastro de Filme",
                    text: "Erro ao cadastrar o Filme",
                    icon: "error"
                });
            }

        } catch (erro) {
            console.error("Erro ao cadastrar o filme:", erro);
        }
    };

    const limparFormulario = () => {
        setValor("");
        setGeneroSelecionado("");
        setImagemUpload(null);
        setEditar(false);
        setIdEditar(0);
    };

    const excluirFilme = async (item) => {
        const result = await Swal.fire({
            title: "Exclusão do Filme",
            text: `Tem certeza que deseja excluir o filme (${item.titulo})?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, excluir!",
            cancelButtonText: "Cancelar"
        });

        if (!result.isConfirmed) return;

        try {
            const retornoAPI = await api.delete(`/Filme/${item.idFilme}`);

            if (retornoAPI.status === 204 || retornoAPI.status === 200) {
                Swal.fire({
                    title: "Exclusão de Filme",
                    text: `Filme (${item.titulo}) excluído com sucesso!`,
                    icon: "success"
                });
                getFilmes();
            }
        } catch (error) {
            Swal.fire({
                title: "Exclusão de Filme",
                text: `Não foi possível excluir o Filme (${item.titulo}).`,
                icon: "error"
            });
        }
    };

    const preEditar = (item) => {
        setValor(item.titulo);
        setGeneroSelecionado(item.idGeneroNavigation?.idGenero || "");
        setIdEditar(item.idFilme);
        setEditar(true);
    };

    const cancelarPreEditar = () => {
        limparFormulario();
    };

    const editarFilme = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Nome", valor);
        formData.append("IdGenero", generoSelecionado);
        if (imagemUpload) {
            formData.append("ImagemUpload", imagemUpload);
        }

        try {
            const retornoAPI = await api.put(`/Filme/${idEditar}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (retornoAPI.status === 204 || retornoAPI.status === 200) {
                Swal.fire({
                    title: "Edição de Filme",
                    text: `(${valor}) editado com sucesso`,
                    icon: "success"
                });
                limparFormulario();
                getFilmes();
            } else {
                Swal.fire({
                    title: "Edição de Filme",
                    text: "Erro ao editar o filme",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error("Erro ao editar filme:", error);
        }
    };

    // buscar filmes e gêneros
    const getFilmes = async () => {
        try {
            const retornoAPI = await api.get("/Filme");
            setListaFilmes(retornoAPI.data);
        } catch (error) {
            console.error("Erro ao buscar os Filmes:", error);
        }
    };

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero");
            setListaGeneros(retornoAPI.data);
        } catch (error) {
            console.error("Erro ao buscar gêneros:", error);
        }
    };

    useEffect(() => {
        getFilmes();
        getGeneros();
    }, []);

    // JSX
    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filmes"
                    visibilidade="block"
                    placeholder="Filme"
                    valor={valor}
                    setValor={setValor}
                    valorSelect={generoSelecionado}
                    setValorSelect={setGeneroSelecionado}
                    listaGeneros={listaGeneros}
                    cancelarEdicao={cancelarPreEditar}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    btneditar={editar}
                    setImagemUpload={setImagemUpload} // passa para o filho
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    visibilidade="block"
                    lista={listaFilmes}
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcPreEditar={preEditar}
                />
            </main>

            <Footer />
        </>
    );
};

export default CadastroFilmes;
