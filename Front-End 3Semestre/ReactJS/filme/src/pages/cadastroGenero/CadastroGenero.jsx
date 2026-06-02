import Rotas from "../../routes/routes"
import "./cadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../Services/services.js"
import Lista from "../../components/lista/Lista"
import Swal from "sweetalert2"

const CadastroGeneros = () => {

    // states e variáveis
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])

    const [editar, setEditar] = useState(false)
    const [idEditar, setIdEditar] = useState([])

    // funções
    const cadastrarGenero = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0) {
            Swal.fire({
                title: "Cadastro de Genero",
                text: "O Gênero deve ser preenchido e é obrigatório",
                icon: "warning"
            });
            //alert("O Gênero deve ser preenchido e é obrigatório")
            return;
        }

        const objCadastro = {
            nome: valor
        }

        try {
            const retornoAPI = await api.post("/Genero", objCadastro)

            if (retornoAPI.status === 201) {
                Swal.fire({
                    title: "Cadastro de Genero",
                    text: `(${objCadastro.nome}) foi Cadastrado`,
                    icon: "success"
                })
                //alert(`Gênero (${objCadastro.nome}) cadastrado com sucesso`)
                setValor("")
                getGeneros()
            } else {

                Swal.fire({
                    title: "Cadastro de Genero",
                    text: "Erro ao cadastrar gênero",
                    icon: "error"
                });

            }

        } catch (erro) {
            console.erro("Erro ao cadastrar gênero:");
            console.log(erro)
        }
    }

    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setIdEditar(0)

    }

   const excluirGenero = async (item) => {
      //validação do formulario 
         const result = await Swal.fire({
            title: "Exclusão de Gênero",
            text: `Tem certeza que deseja excluir o gênero (${item.nome})?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, excluir!",
            cancelButtonText: "Cancelar"
        });

        if (!result.isConfirmed) {
            return false;
        }


        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)//chama a api para excluir o genero

            if (retornoAPI.status === 204 || retornoAPI.status === 200) {
                Swal.fire({
                    title: "Exclusão de Gênero",
                    text: `Gênero (${item.nome}) excluído com sucesso!`,
                    icon: "success"
                })
                getGeneros()
            }
            console.log(retornoAPI)
            getGeneros()

        } catch (error) {
            Swal.fire({
                title: "Exclusão de Gênero",
                text: `Não foi possível excluir o gênero (${item.nome}). Ele pode estar associado a um filme!`,
                icon: "error"
            })
        }

    }

    const preEditar = (item) => {
        setValor(item.nome)
        setIdEditar(item.idGenero)
        setEditar(true)
        console.log(item)
    }

    const cancelarPreEditar = () => {
        setEditar(false)
        setValor("")
        setIdEditar(0)

    }

    const editarGenero = async (e) => {
        e.preventDefault();

        alert(`Gênero ${valor} | id: ${idEditar} `)


        const objEditar = {
            nome: valor
        }
        try {
            const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar)
            if (retornoAPI.status == 204 || retornoAPI.status == 200) {
                alert(`Gênero (${objEditar.nome}) editado com sucesso`)
                limparFormulario()
                getGeneros()
            } else {
                alert("Algum problema aoconteceu ao editar o gênero")
            }
        } catch (error) {
            console.error("Erro ao editar gênero:");
        }
    }

    useEffect(() => {
        //chamar os dados da api
        getGeneros()
    }, [])

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")//chama a api
            const dados = retornoAPI.data//extrai os dados retornados
            setListaGeneros(dados)//guarda os dados no state(ja exibe na lista)
        }
        catch (error) {
            console.error("Erro ao buscar gêneros:");
        }
    }

    // JSX
    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="Gênero"
                    valor={valor}
                    cancelarEdicao={cancelarPreEditar}
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    btneditar={editar}
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"
                    lista={listaGeneros}
                    //chama o metodo para validar

                    tipoLista="genero"
                    funcExcluir={excluirGenero}
                    funcPreEditar={preEditar} />

            </main>

            <Footer />
        </>
    )
}

export default CadastroGeneros