// SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'

// SELETOR POR TAG
document.querySelector('a').innerText = '<b>teste-ancora</b>' // seleciona soment 1 elemento

// SELECIONANDO MAIS DE UM ITEM
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ // função anonima / callback
    elemento.innerHTML = 'teste'
})

// SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

let count = 0 
boxes.forEach(function(box, index) {
    box.innerHTML = 'box ' + (index + 1)
})