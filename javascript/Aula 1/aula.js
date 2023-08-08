function parImpar() {
    let valor = document.getElementById('valor')
    let res = document. getElementById('res')
    let val = (valor.value)

    if (val % 2 === 0) {
        res.innerHTML = 'Este número é par!'
    } else {
        res.innerHTML = 'Este número é ímpar!'
    }
}