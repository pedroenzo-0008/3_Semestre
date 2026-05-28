async function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;

    let cadastrar = document.getElementById("cadastro");

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }


    //processamento
    if (op == 'soma') {
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if (op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao') {
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao') {

        if (n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }

    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;

    let objetocal = {
        numero1: n1,
        numero2: n2,
        operacao: op,
        resultado: resultado
    }
    //Cadastrar na API
    const dadosGravados = await cadastrarCalculadora(objetocal)
    console.log(dadosGravados)

    if ("error" in dadosGravados)
        alert(dadosGravados.error)
    else {
        carregarDados()
    }

}// fim calcular

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if (valor2 == 0) {
        return 'Não é um número';
    }

    return valor1 / valor2;
}


async function cadastrarCalculadora(objetocal) {
    try {
        const retorno = await fetch("http://localhost:3000/calculadora", {
            method: "POST",
            body: JSON.stringify(objetocal),
            headers: {
                "Conetnt-Type": "application/json; charset=UTF-8"
            }
        });
        const dadosGravados = await retorno.json();
        return await dadosGravados;

    }
    catch (error) {
        console.log(error)
        return await
            {
                error: "Problemas para gravar na API"
            }
    }
}


async function carregarDados() {
    alert("Carregando...")

    try {

        const retorno = await fetch("http://localhost:3000/calculadora")

let dadosCadastros = await retorno.json();
console.log(dadosCadastros);

document.getElementById("cadastro").innerHTML = "";
await dadosCadastros.forEach(Calc => {
    mostrarNaTela(Calc)});

    }
    catch (error) {
        alert("falha ao carregar")
    }
}

function mostrarNaTela(objetocal){
    document.getElementById("cadastro").innerHTML +=
    `
    <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${objetocal.numero1}</span>
            <span><strong>Segundo Número:</strong> ${objetocal.numero2}</span>
            <span><strong>Operação:</strong> ${objetocal.operacao}</span>
            <span><strong>Resultado:</strong> ${objetocal.resultado}</span>
    </article> 
    `
}

