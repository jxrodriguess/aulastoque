const corpoTabela= document.getElementById("corpoTabela")

fetch("/usuarios")
.then(function (resposta){ return resposta.json(); })
.then(function (usuarios){
    usuarios.forEach(function (usuario){
        linha = document.createElement("tr")

        const celulaNome = document.createElement("td")
        celulaNome.textContent= usuario.nome

        const celulaEmail = document.createElement("td")
        celulaEmail.textContent= usuario.email

        const celulaMatricula = document.createElement("td")
        celulaMatricula.textContent= usuario.matricula

        const celulaPin= document.createElement("td")
        celulaPin.textContent= usuario.pin

        linha.appendChild(celulaNome)
        linha.appendChild(celulaEmail)
        linha.appendChild(celulaMatricula)
        linha.appendChild(celulaPin)
        corpoTabela.appendChild(linha)
    })
})