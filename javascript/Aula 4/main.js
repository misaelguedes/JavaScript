function jogador(Nome, Idade, Posição) {
    this.Nome = Nome,
    this.Idade = Idade,
    this.Posição = Posição
}

let jogador1 = new jogador('Weverton', 34, 'Goleiro')
console.log(jogador1)

let jogador2 = new jogador('Gustavo Gómez', 29, 'Zagueiro')
console.log(jogador2)

let jogador3 = new jogador('Endrick', 16, 'Atacante')
console.log(jogador3)

// O código abaixo serve para clonar objetos

let jogador4 = {...jogador2}
console.log(jogador4)