/* 

PROMISES (PROMESSA )

*/


const botaoCarregar = document.querySelector('#botaoCarregar')



botaoCarregar.onclick = () =>
    fetch('https://jsonplaceholder.typicode.com/photos', 'GET')
        .then(exibirNaTela)
        .catch(exibirErro) //ligado ao 'resolve'


function exibirNaTela(dados) {
    console.log('Exibir na tela', dados)
}

function exibirErro() {
    console.log('Ops, deu erro!')
}

function fetch(url, method) {
    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const response = JSON.parse(this.responseText)

                resolve(response) //ligado ao 'then'
            }

            if (this.status === 404) {
                reject()
            }
        }

        xhttp.open(method, url, true) //true para assíncrono e false para síncrono
        xhttp.send()
    })
}

