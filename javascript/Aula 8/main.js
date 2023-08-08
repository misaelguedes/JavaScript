function verificar() {
    resposta = document.getElementById('resposta')
    nomeConvidado = document.getElementById('nome').value
    nomeQuemConvidou = document.getElementById('convite').value
    convidadosWeverton = ['PIQUEREZ', 'MAYKE', 'LUAN']
    convidadosRaphaelVeiga = ['GUSTAVO GOMEZ', 'ZÉ RAFAEL', 'GABRIEL MENINO']
    convidadosDudu = ['RONY', 'ARTUR', 'ENDRICK']

    if (nomeQuemConvidou.toUpperCase() === 'Weverton'.toUpperCase() && convidadosWeverton.includes(nomeConvidado.toUpperCase())) {
        resposta.innerHTML = 'Entrada Autorizada!'
    } else if (nomeQuemConvidou.toUpperCase() === 'Raphael Veiga'.toUpperCase() && convidadosRaphaelVeiga.includes(nomeConvidado.toUpperCase())) {
        resposta.innerHTML = 'Entrada Autorizada!'
    } else if (nomeQuemConvidou.toUpperCase() === 'Dudu'.toUpperCase() && convidadosDudu.includes(nomeConvidado.toUpperCase())) {
        resposta.innerHTML = 'Entrada Autorizada!'
    } else {
        resposta.innerHTML = 'Entrada Não Autorizada!'
    }

    document.getElementById('nome').value = ''
    document.getElementById('convite').value = ''
}

resposta.innerHTML = ''