const CampoNome = document.getElementById("nome")
const CampoEmail = document.getElementById("email")
const CampoMatricula = document.getElementById("matricula")
const CampoPin = document.getElementById("pin")
const botao = document.getElementById("cadastro")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", function(){
    const nome = CampoNome.value.trim()
    const email = CampoEmail.value.trim()
    const matricula = CampoMatricula.value.trim()
    const pin = CampoPin.value.trim()

    console.log(nome,email,matricula,pin)
    if(nome==="" || email==="" || pin==="" || matricula ==="" ){
        alert("Preencha todos os campos antes de cadastrar.")
        return
    }

    const novoUsuario = {nome: nome, email: email, matricula: matricula, pin: pin}

    fetch("/cadastrar", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novoUsuario)
    })
    .then(function (resposta) { return resposta.json(); })
    .then(function (dados){
        mensagem.textContent = "Usuário "+ dados.nome +" cadastrado com sucesso!"
    })
    .catch(function (erro){
        mensagem.textContent= "Erro ao cadastrar. Tente novamente"
        console.error(erro)
    })
})