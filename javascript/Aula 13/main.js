function faixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa = [
    faixaPreco('De R$ 0 a R$ 100', 0, 100),
    faixaPreco('De 100 a 200', 100, 200),
    faixaPreco('Acima de 200', 200, 999999)
]

console.log(faixa)