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
let totalPreco = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;
}, 0 );

console.clear()

console.log(`Você tem um valor total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é R$${totalPreco.toFixed(2)}`)


