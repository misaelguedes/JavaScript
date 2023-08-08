function calcular() {
    let valor = document.getElementById('valor')
    let res = document.getElementById('res')
    let val = (valor.value)
    let c = ''

    for (let n = 1; n <= val; n++) {
        c += '*'
        console.log(n, c)
    }
}