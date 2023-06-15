window.onload = function() {
    document.getElementById('btn').addEventListener('click', btn_click);
}

function btn_click() {
    let pedido = new XMLHttpRequest();

    pedido.onreadystatechange = function() {
        if (pedido.readyState == 4 && pedido.status == 200) {
            document.getElementById('caixa').innerHTML = this.responseText;
        } else {
            document.getElementById('caixa').innerHTML = 'Tente mais tarde!';
        }
    }

    pedido.open("GET", "dados.txt", true);
    pedido.send();
}