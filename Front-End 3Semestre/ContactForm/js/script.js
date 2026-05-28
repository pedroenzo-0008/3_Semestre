
async function cadastrarContato(objetoContato) {
    console.log(objetoContato);


    //chamat o fetch
    const resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    });
    return  await resposta;
}

async function buscarEndereco(cep) {



    if (cep.trim().length < 8) {
        alert("O CEP não pode ser vazio")
        return false;
    }

    try {
        aguardandoCampos();

        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

    } catch (error) {
        console.log(error);
    }
}



function aguardandoCampos() {
    document.getElementById("rua").value = "aguarde ...";
    document.getElementById("bairro").value = "aguarde ...";
    document.getElementById("cidade").value = "aguarde ...";
    document.getElementById("estado").value = "aguarde ...";
}





function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
     let email = document.getElementById("email").value;
     let pais = document.getElementById("pais").value;
     let ddd = document.getElementById("ddd").value;
     let telefone = document.getElementById("telefone").value;
     let cep = document.getElementById("cep").value;
     let rua = document.getElementById("rua").value;
     let numero = document.getElementById("numero").value;
     let apto = document.getElementById("apto").value;
     let bairro = document.getElementById("bairro").value;
     let cidade = document.getElementById("cidade").value;
     let estado = document.getElementById("estado").value;
     let anotacao = document.getElementById("anotacao").value;

    let quantidadeErros = 0;

    if (nome.trim().length == 0) { /*se o campo nome estiver vazio vai dar o alerta*/
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else {
        reiniciaBorda("nome");

    }

    //sobrenome

    if (sobrenome.trim().length == 0) { /*se o campo nome estiver vazio vai dar o alerta*/
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else {
        reiniciaBorda("sobrenome");

    }



    //email

    if(email.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("email");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("email");

    }

    //pais

    if(pais.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("pais");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("pais");

    }

    //ddd

    if(ddd.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("ddd");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("ddd");

    }

    //telefone

    if(telefone.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("telefone");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("telefone");

    }

    //cep

    if(cep.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("cep");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("cep");

    }

    //rua
    if(rua.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("rua");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("rua");

    }

    //numero

    if(numero.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("numero");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("numero");

    }

    //apto
    if(apto.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("apto");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("apto");

    }

    //bairro

    if(bairro.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("bairro");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("bairro");

    }

    //Cidade
    if(cidade.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("cidade");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("cidade");

    }

    //estado
    if(estado.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("estado");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("estado");

    }

    //Anotação
    if(anotacao.trim().length == 0){ /*se o campo nome estiver vazio vai dar o alerta*/
        formError("anotacao");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!")
    }
    else{
        reiniciaBorda("anotacao");

    }


    if (quantidadeErros > 0) {
        alert("Existem " + quantidadeErros + " erros no formulário!")
        quantidadeErros = 0;
    }

    else{
        alert("Formulario enviado com sucesso")
        reiniciaTodasAsBordas();
    }

    //hora de cadastrar

    if (quantidadeErros > 0) {
        alert("Preencha todos os campos");
        quantidadeErros = 0;
    } else {
        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email : email,
            pais : pais,
            ddd : ddd,
            telefone : telefone, 
            cep : cep,
            rua : rua,
            numero : numero,
            apto : apto,
            bairro : bairro,
            cidade : cidade,
            estado : estado,
            anotacao : anotacao
        }

        let cadastrado = cadastrarContato(objetoContato);

        reiniciaBorda();
    }



}







function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}
