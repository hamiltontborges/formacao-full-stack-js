
const botao = document.querySelector('#botao')
const param = 'OK'

botao.onclick = () => {
    fetch(param)
    .then(exibirResultado)
    .catch(exibirErro)
}


function exibirResultado() {
    setTimeout(() =>
        console.log('Ok, promisse resolvida')
    , 10000)
}

function exibirErro() {
    console.log('Ops, deu erro')
}

function fetch(param) {
    return new Promise((resolve, reject) => {
        if(param === 'OK') {
            resolve()
        } else {
            reject()
        }
    })
}

/* SOLUÇÂO DO PROFESSOR

    function job() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ok, parece que funcionou!')
        }, 10000)
        })
    }

    job().then(msg => console.log(msg))

*/