function carregar() {

var msg = document.getElementById('msg')

var img = document.getElementById('imagem')


var data = new Date()

var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'manhã.png'
    document.body.style.background = '#ffed71'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#e6b250'
} else {
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#1f659c'
}
}
