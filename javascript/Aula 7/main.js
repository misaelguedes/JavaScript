let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let email = document.getElementById('email')
let cor = document.getElementById('cor')
let resposta = document.getElementById('resposta')

function enviar() {
    resposta.innerHTML = `
    <strong>Seu nome é:</strong> ${nome.value} <br>
    <strong>Idade:</strong> ${idade.value} anos <br>
    <strong>E-mail:</strong> ${email.value} <br>
    <strong>Cor de pele:</strong> ${cor.value}`
}