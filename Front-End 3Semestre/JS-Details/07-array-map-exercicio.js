const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
]

//rodar o map gerando um novo array com o dobro dos números do original
const dobro = numeros.map((numero) => {
    return numero * 2;
});

console.log();
console.log(`Array Modificado:`);
console.log();

//após, exiba os valores do array dobro no console utilizando o foreach
let textoResultado = "";
dobro.forEach((numero) => {
    textoResultado += `${numero} | `;  //aculmula texto em uma string (sem pular linha)
});

//remover o ultimo pipe
//mostra o texto completo

textoResultado = textoResultado.substring(0,textoResultado.length - 2);
console.log (textoResultado);
