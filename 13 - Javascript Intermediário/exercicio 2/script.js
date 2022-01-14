const btnMais = document.querySelector('#btnMais')
const btnMenos = document.querySelector('#btnMenos')
const btnStop = document.querySelector('#btnStop')
const btnClear = document.querySelector('#btnClear')
const contador = document.querySelector('#contador')

let count = 0
let incrementar
let decrementar

btnMais.onclick = () => {
    clearInterval(decrementar)

    incrementar = setInterval(() => {
        count++
        contador.innerText = count
        
    }, 1000)

    btnMais.classList.add('ativo')
    btnMenos.classList.remove('ativo')
}

btnMenos.onclick = () => {
    clearInterval(incrementar)

    decrementar = setInterval(() => {
        count--
        contador.innerText = count
        
    }, 1000)

    btnMenos.classList.add('ativo')
    btnMais.classList.remove('ativo')
}

btnStop.onclick = () => {
    clearInterval(incrementar)
    clearInterval(decrementar)    
    btnMais.classList.remove('ativo')
    btnMenos.classList.remove('ativo')
}

btnClear.onclick = () => {
    count = 0
    contador.innerText = count
    btnMais.classList.remove('ativo')
    btnMenos.classList.remove('ativo')
}