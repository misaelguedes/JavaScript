let res = document.getElementById('res')

function verificar() {
    let numero = document.getElementById('num').value

    if (numero % 3 === 0 && numero % 5 === 0) {
        res.innerHTML = 'FizzBuzz'
    } else if (numero % 3 === 0) {
        res.innerHTML = 'Fizz'
    } else if (numero % 5 === 0) {
        res.innerHTML = 'Buzz'
    } else {
        res.innerHTML = `${numero}`
    }

    document.getElementById('num').value = ''
}