document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if(document.getElementById(nome).value != "" && 
       document.getElementById(email).value != "" && 
       document.getElementById(telefone).value != "")
    {
        alert("Pronto!Você receberá mensagens por e-mail.");
    }
    else
    {
        alert("Por favor preencha todos os campos");
    }
}