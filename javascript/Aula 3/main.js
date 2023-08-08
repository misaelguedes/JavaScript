function detalhes(Nome, Idade, Posição) {
    return {
        Nome,
        Idade,
        Posição,
    }
}

const jogador1 = detalhes('Raphael Veiga', 28, 'Meia')
console.log(jogador1)

const jogador2 = detalhes('Dudu', 32, 'Atacante')
console.log(jogador2)

const jogador3 = detalhes('Joaquin Piquerez', 24, 'Lateral-Esquerdo')
console.log(jogador3)