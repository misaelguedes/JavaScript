
let res = document.getElementById('res')
let titulares = ['WEVERTON', 'GUSTAVO GOMEZ', 'LUAN', 'PIQUEREZ', 'MAYKE', 'ZÉ RAFAEL', 'GABRIEL MENINO', 'RAPHAEL VEIGA', 'DUDU', 'ARTUR', 'RONY']
let reservas = ['MARCELO LOMBA', 'VINICIUS SILVESTRE', 'MURILO', 'NAVES', 'MARCOS ROCHA', 'GARCIA', 'VANDERLAN', 'FABINHO', 'JAILSON', 'RICHARD RIOS', 'ATUESTA', 'ENDRICK', 'JHON JHON', 'LUIS GUILHERME', 'BRENO LOPES', 'FLACO LOPEZ']

function verificar() {
    let nome = document.getElementById('nome').value.toUpperCase()

    if (titulares.includes(nome)) {
        res.innerHTML = 'Titular'
    } else if (reservas.includes(nome)) {
        res.innerHTML = 'Reserva'
    } else {
        res.innerHTML = 'O nome digitado não faz parte do elenco do Palmeiras.'
    }

    document.getElementById('nome').value = ''
}