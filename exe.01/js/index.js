var horadodia = window.document.getElementById('hora')
var imagen = window.document.getElementById('imagen')
var fundo = window.document.getElementById('body')
var hora = new Date()
var horadodia1 = hora.getHours()
horadodia.innerHTML = `Agora são ${horadodia1} Horas.`

if (horadodia1 > 12 && horadodia1 < 18) {
    horadodia.innerHTML = `Agora são ${horadodia1} Horas.`
    imagen.src = './/img/frases-de-boa-tarde.jpg' 
    fundo.style.background = '#a47662'   
}
else if (horadodia1 > 18 && horadodia1< 24) {
    horadodia.innerHTML = `Agora são ${horadodia1} Horas.`
    imagen.src = './/img/linda-noite-no-oceano-com-lua-cheia_104785-866.avif'
    fundo.style.background = '#494a4b'
}



