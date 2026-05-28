const estoque = [
    {
        descricao : "Camisa Polo",
        cor : "Verde",
        preco : 49.99,
        perfil: "M",
        quantidade : 10,
        promocao: false
    },
    
    {
        descricao : "Camisa Polo",
        cor : "Amarela",
        preco : 29.99,
        perfil: "F",
        quantidade : 2,
        promocao: true
    },

    {
        descricao : "Camisa Polo",
        cor : "Azul",
        preco : 49.99,
        perfil: "M",
        quantidade : 7,
        promocao: false
},

    {
        descricao : "Camisa Polo",
        cor : "Vermelha",
        preco : 29.99,
        perfil: "F",
        quantidade : 5,
        promocao: true
    },

];


// const estoqueF = estoque.filter((item) => {
//     return item.perfil === "F";
// });

// console.log("Itens com perfil F:");
// console.log(estoqueF);

/////////////////////////////////////////////////////

const camPromocao = estoque.filter((L) => {
    return L.promocao == true;
});

let qtdPromocao = 0;
produtosPromocao.forEach((L) => {
    qtdPromocao += L.quantidade;
});
console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);
console.log(camPromocao);