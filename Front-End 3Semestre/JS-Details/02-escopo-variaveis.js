const nome = `Pedro`;

let sobrenome = "Ribeiro";

{
    const nome = "Pedro"
    let sobrenome = "Enzo";
    console.log(`Nome completo: ${nome} ${sobrenome}`);
}
sobrenome = 600.97;
sobrenome = true;

console.log(`Nome completo: ${nome} ${sobrenome}`);


const nomes = ["Pedro", "Davi"]
for (var i = 0; i < nomes.length; i++) {
    console.log(`nome ${i}: $${nome[i]}`);
    
}
    console.log(i);
