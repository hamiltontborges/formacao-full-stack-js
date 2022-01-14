const btnMais = document.querySelector('#btnMais')
const btnMenos = document.querySelector('#btnMenos')
const contador = document.querySelector('#contador')

let count = 0

btnMais.onclick = () => {
    count++
    contador.innerText = count
}

btnMenos.onclick = () => {
    count--
    contador.innerText = count
}
