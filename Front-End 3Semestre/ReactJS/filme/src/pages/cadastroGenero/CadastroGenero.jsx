import "./cadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import { useEffect, useState } from "react";
import api from "../../Services/services.js";
import Lista from "../../components/lista/Lista";
import Swal from "sweetalert2";

const CadastroGeneros = () => {
  // States
  const [valor, setValor] = useState("");
  const [listaGeneros, setListaGeneros] = useState([]);
  const [editar, setEditar] = useState(false);
  const [idEditar, setIdEditar] = useState(0);

  const token = localStorage.getItem("token");

const response = await api.post("/Filme", novoFilme, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});




  // Funções
  const cadastrarGenero = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0) {
      Swal.fire({
        title: "Cadastro de Gênero",
        text: "O Gênero deve ser preenchido e é obrigatório",
        icon: "warning",
      });
      return;
    }

    const objCadastro = { nome: valor };

    try {
      const retornoAPI = await api.post("/Genero", objCadastro);

      if (retornoAPI.status === 201) {
        Swal.fire({
          title: "Cadastro de Gênero",
          text: `(${objCadastro.nome}) foi cadastrado com sucesso!`,
          icon: "success",
        });
        setValor("");
        getGeneros();
      } else {
        Swal.fire({
          title: "Cadastro de Gênero",
          text: "Erro ao cadastrar gênero",
          icon: "error",
        });
      }
    } catch (erro) {
      console.error("Erro ao cadastrar gênero:", erro);
    }
  };

  const editarGenero = async (e) => {
    e.preventDefault();

    const objEditar = { nome: valor };

    try {
      const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar);

      if (retornoAPI.status === 204 || retornoAPI.status === 200) {
        Swal.fire({
          title: "Edição de Gênero",
          text: `(${objEditar.nome}) editado com sucesso!`,
          icon: "success",
        });
        limparFormulario();
        getGeneros();
      } else {
        Swal.fire({
          title: "Edição de Gênero",
          text: "Erro ao editar gênero",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Erro ao editar gênero:", error);
    }
  };

  const excluirGenero = async (item) => {
    const result = await Swal.fire({
      title: "Exclusão de Gênero",
      text: `Tem certeza que deseja excluir o gênero (${item.nome})?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      const retornoAPI = await api.delete(`/Genero/${item.idGenero}`);

      if (retornoAPI.status === 204 || retornoAPI.status === 200) {
        Swal.fire({
          title: "Exclusão de Gênero",
          text: `(${item.nome}) excluído com sucesso!`,
          icon: "success",
        });
        getGeneros();
      }
    } catch (error) {
      Swal.fire({
        title: "Exclusão de Gênero",
        text: `Não foi possível excluir o gênero (${item.nome}). Ele pode estar associado a um filme!`,
        icon: "error",
      });
    }
  };

  const preEditar = (item) => {
    setValor(item.nome);
    setIdEditar(item.idGenero);
    setEditar(true);
  };

  const cancelarPreEditar = () => {
    limparFormulario();
  };

  const limparFormulario = () => {
    setValor("");
    setEditar(false);
    setIdEditar(0);
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
    getGeneros();
  }, []);

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
          tipoLista="genero"
          funcExcluir={excluirGenero}
          funcPreEditar={preEditar}
        />
      </main>

      <Footer />
    </>
  );
};

export default CadastroGeneros;
