import mycomponent from "./componentes/children/mycomponent";
import Saudacao from "./componentes/Exercicio01/Saudacao";
import Produto from "./componentes/Exercicio02/Produto";
import Perfil from "./componentes/Exercicio03/Perfil";
import Botao from "./componentes/Exercicio04/Botao";
import Filme from "./componentes/Exercicio05/Filme";
import Aluno from "./componentes/Exercicio06/Aluno";
import Card from "./componentes/Exercicio07/card";
import Contato from "./componentes/Exercicio08/contato";
import Jogo from "./componentes/Exercicio09/Jogo";
import ItemLoja from "./componentes/Exercicio10/ItemLoja";
import Pessoa from "./componentes/desafioExtra/pessoa";


function App() {
// Exercício 01
//   return (
//     <div>
//       <Saudacao nome="Ana" />
//       <Saudacao nome="Carlos" />
//       <Saudacao nome="Marina" />
//     </div>
//   );
// Exercício 02
// return (
//     <div>
//       <Produto
//         nome="Notebook"
//         preco="3500"
//         descricao="Notebook gamer com 16GB de RAM."
//       />

//       <Produto
//         nome="Celular"
//         preco="2200"
//         descricao="Celular com câmera de alta resolução."
//       />

//       <Produto
//         nome="Headset"
//         preco="350"
//         descricao="Headset com som surround e microfone."
//       />
//     </div>
//   );
// Exercício 03
// return (
//     <div>
//       <Perfil
//         nome="Ana"
//         idade="20"
//         profissao="Desenvolvedora Front-end"
//       />

//       <Perfil
//         nome="Carlos"
//         idade="25"
//         profissao="Designer"
//       />

//       <Perfil
//         nome="Marina"
//         idade="22"
//         profissao="Programadora"
//       />
//     </div>
//   );
// Exercício 04
//   return (
//     <div>
//       <Botao texto="Salvar" cor="green" />
//       <Botao texto="Excluir" cor="red" />
//       <Botao texto="Editar" cor="blue" />
//     </div>
//   );
// Exercício 05
// return (
//     <div>
//       <Filme
//         titulo="Homem-Aranha"
//         ano="2021"
//         genero="Ação"
//         nota="9.0"
//       />

//       <Filme
//         titulo="Interestelar"
//         ano="2014"
//         genero="Ficção Científica"
//         nota="9.5"
//       />

//       <Filme
//         titulo="Toy Story"
//         ano="1995"
//         genero="Animação"
//         nota="8.8"
//       />
//     </div>
//   );
//  return (
//     <div>
//       <Aluno
//         nome="Ana"
//         curso="Desenvolvimento Web"
//         imagem="https://lunetas.com.br/wp-content/uploads/2024/02/ia-e-terapia-criancas-procuram-robos-para-falar-como-se-sentem-portal-lunetas.png"
//       />

//       <Aluno
//         nome="Carlos"
//         curso="Design Gráfico"
//         imagem="https://i.pinimg.com/736x/73/83/f9/7383f91c2b8349cf6520bdb92ac598fd.jpg"
//       />

//       <Aluno
//         nome="Marina"
//         curso="Ciência da Computação"
//         imagem="https://img.magnific.com/fotos-premium/menina-bonita_605905-20411.jpg"
//       />
//     </div>
//   );
// Exercício 07
//   return (
//     <div>
//       <Card>
//         <h2>Meu Card</h2>
//         <p>texto dentro do card.</p>
//       </Card>

//       <Card>
//         <h2>Produto</h2>
//         <p>Notebook Gamer</p>
//         <button>Comprar</button>
//       </Card>

//       <Card>
//         <img
//           src=""
//           alt="Imagem"
//         />
//         <p>Imagem dentro do card</p>
//       </Card>
//     </div>
//   );
// return (
//     <div>
//       <Contato
//         nome="Ana Silva"
//         telefone="(11) 99999-1111"
//         email="ana@gmail.com"
//       />

//       <Contato
//         nome="Carlos Souza"
//         telefone="(11) 98888-2222"
//         email="carlos@gmail.com"
//       />

//       <Contato
//         nome="Marina Costa"
//         telefone="(11) 97777-3333"
//         email="marina@gmail.com"
//       />

//       <Contato
//         nome="Pedro Lima"
//         telefone="(11) 96666-4444"
//         email="pedro@gmail.com"
//       />

//       <Contato
//         nome="Julia Rocha"
//         telefone="(11) 95555-5555"
//         email="julia@gmail.com"
//       />
//     </div>
//   );

//   return (
//     <div>
//       <Jogo
//         nome="Minecraft"
//         plataforma="PC"
//         preco="99,90"
//         imagem="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg"
//       />

//       <Jogo
//         nome="FIFA 25"
//         plataforma="PlayStation 5"
//         preco="349,90"
//         imagem="https://image.api.playstation.com/vulcan/ap/rnd/202409/1616/e811cf8981ceef99171987a7477d30f89a4a896c625d61e1.png?w=440"
//       />

//       <Jogo
//         nome="GTA V"
//         plataforma="Xbox"
//         preco="199,90"
//         imagem="https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png"
//       />
//     </div>
//   );
// return (
//     <div>
//       <ItemLoja
//         nome="Notebook"
//         preco="3500"
//         categoria="Eletrônicos"
//         estoque={0}
//       />

//       <ItemLoja
//         nome="Mouse Gamer"
//         preco="150"
//         categoria="Acessórios"
//         estoque={0}
//       />

//       <ItemLoja
//         nome="Teclado Mecânico"
//         preco="300"
//         categoria="Periféricos"
//         estoque={8}
//       />
//     </div>
//   );

const pessoas = [
    {
      id: 1,
      nome: "Ana Silva",
      idade: 20,
      cidade: "São Paulo",
      foto: "https://lunetas.com.br/wp-content/uploads/2024/02/ia-e-terapia-criancas-procuram-robos-para-falar-como-se-sentem-portal-lunetas.png"
    },

    {
      id: 2,
      nome: "Carlos Souza",
      idade: 25,
      cidade: "Rio de Janeiro",
      foto: "https://i.pinimg.com/736x/73/83/f9/7383f91c2b8349cf6520bdb92ac598fd.jpg"
    },

    {
      id: 3,
      nome: "Marina Costa",
      idade: 22,
      cidade: "Curitiba",
      foto: "https://img.magnific.com/fotos-premium/menina-bonita_605905-20411.jpg"
    }
  ];

  return (
    <div className="container">
      {pessoas.map((pessoa) => (
        <Pessoa
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          cidade={pessoa.cidade}
          foto={pessoa.foto}
        />
      ))}
    </div>
  );
}
export default App;