 async function calcular() {
   const nome = document.getElementById("nome").value.trim();
   const altura = parseFloat (document.getElementById("altura").value);
   const peso = parseFloat (document.getElementById("peso").value);
   const IMC = (calcularIMC(peso,altura).toFixed(2));
   const situacao = gerarSituacao(IMC)


    if (nome.length == 0  || isNaN (altura) || isNaN (peso)) 

        {
                alert("Preencha todos os campos!");
                return false;
        }

    console.log("Liberado para cadastrar");
   

        let  objIMC = {
                nome: nome,
                altura: altura,
                peso: peso,
                IMC: IMC,
                situacao: situacao
        }

        const dadosGravados = await cadastrarNaAPI(objIMC)
        console.log(dadosGravados)

        if ("error" in dadosGravados) alert(dadosGravados.error)
                else {
                 
                        carregarDados();
         
        }

}

async function cadastrarNaAPI(objCadastro){
        try {
              const retorno = await fetch("http://localhost:3000/imc", {
                method : "POST", 
                body : JSON.stringify(objCadastro),
                headers : {
                 "Content-type" : "application/json; charset=UTF-8"
                }
              });  

              const dadosGravados = await retorno.json();
              return dadosGravados;

        } catch (error) {
                console.log(error);
                return await {error:"problemas para gravar na API"}
        }
    }

function calcularIMC(peso, altura){
        return peso/ (altura * altura);
}

// Menor que 16 – Magreza grave;

// 16 a menor que 17 – Magreza moderada;

// 17 a menor que 18,5 – Magreza leve;

// 18,5 a menor que 25 – Saudável;

// 25 a menor que 30 – Sobrepeso;

// 30 a menor que 35 – Obesidade Grau I;

// 35 a menor que 40 – Obesidade Grau II (considerada severa);

// Maior que 40 – Obesidade Grau III (considerada mórbida).

//A função deverá retornar o texto da situação baseada no IMC
function gerarSituacao(IMC){
        if (IMC < 16) {
                return "Magreza grave";
        }

        else if (IMC < 17) {
                return "Magreza Moderada"
        }

        else if (IMC < 18.5) {
                return "Magreza Leve"
        }

        else if (IMC < 25) {
                return "Saudável"
        }

        else if (IMC < 30) {
                return "SObrepeso"
        }

        else if (IMC < 35) {
                return "Obesidade Grau I"
        }

        else if (IMC < 40) {
                return "Obesidade Grau II"
        }

        else if (IMC > 40) {
                return "Obesidade Grau III"
        }

        
}

async function carregarDados()
{
    alert("Carregando...")

    const retorno = await fetch("http://localhost:3000/imc")

    let IMCs = await retorno.json()
    
    IMCs.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
    });

    

    for(i = 0; i < IMCs.length; i++)
    {
        cadastro.innerHTML +=
        `
        <tr>
            <th>${IMCs[i].nome}</th>
            <th>${IMCs[i].altura}</th>
            <th>${IMCs[i].peso}</th>
            <th>${IMCs[i].IMC}</th>
            <th>${IMCs[i].situacao}</th>     
        </tr>
        `
    }
}

