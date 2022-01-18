const formulario = document.querySelector('#formulario')
const inputMsg = document.querySelector('#input-msg')
const botao = document.querySelector('#botao')
const mensagem = document.querySelector('#mensagem')
const loading = document.querySelector('#img-loading')

formulario.onsubmit = function(e) {
    e.preventDefault()
    
    botao.classList.add('hidden')
    loading.classList.remove('hidden')
    msg = inputMsg.value
    promessa(msg)
        .then(msg => {
            formulario.classList.add('hidden')
            mensagem.classList.remove('hidden')
            mensagem.innerText = msg
        })
        .catch(msg =>{
            formulario.classList.add('hidden')
            mensagem.classList.remove('hidden')
            mensagem.innerText = msg
        })
}

function promessa(msg) {
    return new Promise((resolve, reject) => {
        if (msg !== '') {
            setInterval(() => {
                resolve(msg)
            }, 3000)
        } else {
            reject('Você não digitou nada. Tente novamente.')
        }
        })
}

