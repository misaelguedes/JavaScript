onload = function() {
    document.getElementById('btn').addEventListener('click', btn_click);
}

function btn_click() {
    document.getElementById('caixa').innerHTML = 'Este é o texto alterado.'
}
