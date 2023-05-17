async function buscaEndereco(cep){
    var mensagemErro = document.getElementById("erro")
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPCOnvertida = await consultaCEP.json();
        if (consultaCEPCOnvertida.erro){
            throw Error('CEP não existente!!');
        }
        var logradouro = document.getElementById("endereco")
        var bairro = document.getElementById("bairro")
        var complemento = document.getElementById("complemento")
        var cidade = document.getElementById("cidade")
        var UF = document.getElementById("estado")

        logradouro.value = consultaCEPCOnvertida.logradouro;
        bairro.value = consultaCEPCOnvertida.bairro;
        complemento.value = consultaCEPCOnvertida.complemento;
        cidade.value = consultaCEPCOnvertida.localidade;
        UF.value = consultaCEPCOnvertida.uf;
        console.log(consultaCEPCOnvertida);
        return consultaCEPCOnvertida;
    }catch (erro){
        mensagemErro.innerHTML = `<p>CEP Invalido. Tente Novamente!!</p>`;
        console.log(erro)
    }

}

var cep = document.getElementById("cep")
cep.addEventListener("focusout",  () => buscaEndereco(cep.value))
