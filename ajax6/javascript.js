function enviar(id_formulario) {
    let frm = $('#' + id_formulario)

    frm.submit(function(e) {
        e.preventDefault()

        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),

            success: function(i) {
                $('#info').html('Enviado com sucesso!')
            },

            error: function() {
                $('#info').html('Erro!')
            }
        })
    })
}