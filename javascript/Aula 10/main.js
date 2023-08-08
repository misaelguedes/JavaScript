let limiteVelocidade = 70
let res = document.getElementById('res')

function verificar() {
    let velocidade = document.getElementById('vel').value

    if (velocidade <= limiteVelocidade) {
        res.innerHTML = 'OK!'
    } else if (velocidade > limiteVelocidade) {
        res.innerHTML = 'Acima do limite de velocidade!<br>'
        let pontos = (velocidade - limiteVelocidade) / 5
        res.innerHTML += `${Math.floor(pontos)} Pontos!`

        if (pontos >= 12) {
            res.innerHTML += ' Carteira Suspensa!'
        }
    }

    document.getElementById('vel').value = ''
}