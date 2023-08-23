var horadodia = window.document.getElementById('hora')
var imagen = window.document.getElementById('imagen')
var fundo = window.document.getElementById('body')
var hora = new Date()
var minutos = new Date()
var horadodia1 = hora.getHours()
var minutos1 = minutos.getMinutes()
horadodia.innerHTML = `Agora são ${horadodia1}:${minutos1}`
if(minutos1 < 10){
    horadodia.innerHTML = `Agora são ${horadodia1}:0${minutos1}`
}

if (horadodia1 >= 12 && horadodia1 < 18) {
    horadodia.innerHTML = `Agora são ${horadodia1}:${minutos1}`
    imagen.src = './/img/frases-de-boa-tarde.jpg' 
    fundo.style.background = '#a47662'
    if(minutos1 < 10){
        horadodia.innerHTML = `Agora são ${horadodia1}:0${minutos1}`
    }
}
else if (horadodia1 >= 18 && horadodia1 < 24) {
    horadodia.innerHTML = `Agora são ${horadodia1}:${minutos1}`
    imagen.src = './/img/linda-noite-no-oceano-com-lua-cheia_104785-866.avif'
    fundo.style.background = '#494a4b'
    if(minutos1 < 10){
        horadodia.innerHTML = `Agora são ${horadodia1}:0${minutos1}`
    }
}