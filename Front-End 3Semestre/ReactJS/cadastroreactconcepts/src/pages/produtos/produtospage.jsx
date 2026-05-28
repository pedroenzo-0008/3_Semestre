import "./produtospage.css"
import { useEffect, useState } from "react"
import axios from "axios";


export default function ProdutosPage() {
  const [id, setId] = useState(null)
  const [produto, setProduto] = useState("")
  const [descricao, setDescricao] = useState("")
  const [imagem, setImagem] = useState("")
  const [preco, setPreco] = useState("")
  const [arrayProduto, setArrayProduto] = useState([])

  useEffect(() => {
    async function getDados() {
      try {
        const retornoAPI = await axios.get("http://localhost:3000/produtos")
        // const retornoAPI = await fetch("http://localhost:3000/produtos")
        const dados = await retornoAPI.data;
        setArrayProduto(dados)
      } catch (error) {
        console.log(error)
      }
    }
    getDados()
  }, [])

  async function deletar(id) {
    try {
      const retornoAPI = await axios.delete(`http://localhost:3000/produtos/${id}`)
      setArrayProduto((prev) => prev.filter((p) => p.id !== id))
    } catch (error) {
      console.log(error)
      alert("Erro ao deletar produto")
    }
  }

  async function Cadastrar(e) {
    e.preventDefault()

    if (descricao === "" || produto === "" || preco === "" || imagem === "") {
      alert("Preencha todos os campos corretamente")
      return
    }

    const objProduto = {
      nome: produto,
      descricao,
      preco: parseFloat(preco),
      imagem,
    }

    if (id) {
      // Atualizar produto existente
      const retornoAPI = await axios.post("http://localhost:3000/produtos", objProduto);
      const atualizado = await retornoAPI.data()
      setArrayProduto((prev) =>
        prev.map((p) => (p.id === id ? atualizado : p))
      )
      setId(null)
    } else {
      // Criar novo produto
      const retornoAPI = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        body: JSON.stringify(objProduto),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      const novo = await retornoAPI.json()
      setArrayProduto([...arrayProduto, novo])
    }

    limparCampos()
  }

  function limparCampos() {
    setProduto("")
    setDescricao("")
    setPreco("")
    setImagem("")
    setId(null)
  }

  function editar(produto) {
    setId(produto.id)
    setProduto(produto.nome)
    setDescricao(produto.descricao)
    setPreco(produto.preco)
    setImagem(produto.imagem)
  }

  return (
    <>
      <h1>Cadastro</h1>

      <form onSubmit={Cadastrar} className="secao-cadastro">
        <fieldset className="cadastro">
          <div>
            <label htmlFor="produto">Nome:</label>
            <input
              type="text"
              id="produto"
              value={produto}
              className="cadastro__entrada"
              onChange={(e) => setProduto(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="descricao">Descricao:</label>
            <input
              type="text"
              id="descricao"
              value={descricao}
              className="cadastro__entrada"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="preco">Preco:</label>
            <input
              type="number"
              id="preco"
              value={preco}
              className="cadastro__entrada"
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="imagem">Imagem:</label>
            <input
              type="text"
              id="imagem"
              value={imagem}
              className="cadastro__entrada"
              onChange={(e) => setImagem(e.target.value)}
            />
          </div>

          <button type="submit" className="cadastro__btn-cadastrar">
            {id ? "Atualizar" : "Cadastrar"}
          </button>
        </fieldset>

        <section className="secao-produtos">
          {arrayProduto.map((p) => (
            <div key={p.id} className="card-produto">
              <img
                src={`/imagens/${p.imagem}.jpg`}
                alt={p.nome}
                width="150"
              />
              <p>
                <strong>{p.nome}</strong>
              </p>
              <p>Preço: {parseFloat(p.preco).toFixed(2)}</p>
              <p>Descrição:</p>
              <p>{p.descricao}</p>

              <button
                type="button"
                className="cadastro__btn-cadastrar"
                onClick={() => editar(p)}
              >
                Editar
              </button>

              <button
                type="button"
                className="cadastro__btn-cadastrar"
                onClick={() => deletar(p.id)}
              >
                Deletar
              </button>
            </div>
          ))}
        </section>
      </form>
    </>
  )
}
