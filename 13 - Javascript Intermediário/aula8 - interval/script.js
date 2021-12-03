let contador = document.querySelector('#contador')

let count = 0

let intervalo = setInterval(function(){
    count++
    contador.innerText = count
}, 1000)

let botaoPausar = document.querySelector('#btnPausar')

botaoPausar.onclick = function(){
    clearInterval(intervalo)
}