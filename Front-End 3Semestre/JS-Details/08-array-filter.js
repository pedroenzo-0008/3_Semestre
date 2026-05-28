const numeros = [5, 10, 14, 50, 10, 900, 100, 10];

const numeroEncontrado = numeros.filter((n) => {
    return n == 10;
});

const nomes = ["Pedro Enzo", "Davi", "Maria", "Samuel", "James", "Murilo", "Gustavo", "Henrique",];

pessoasLetrasM = nomes.filter((nome) =>{
   const primeiraLetra = nome.substring(0,1);
   return primeiraLetra == "M" || primeiraLetra == "P"
});

console.log(pessoasLetrasM);