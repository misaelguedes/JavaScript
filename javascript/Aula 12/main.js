let endereco = {
    Rua: 'Avenida Diretriz',
    Cidade: 'Barueri',
    CEP: '06463-180'
}

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave])
}

exibirEndereco(endereco)