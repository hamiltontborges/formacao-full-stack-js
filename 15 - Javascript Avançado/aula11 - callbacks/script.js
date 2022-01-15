/* 

CALLBACK

*/


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => carregarFotos(exibirNaTela)

function carregarFotos(callback) {
    
    const xhttp = new XMLHttpRequest()
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)

            if (callback) {
                callback(response)
            }
        }
    }
    
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true) //true para assíncrono e false para síncrono
    xhttp.send()
}

function exibirNaTela(dados) {
    console.log('Exibir na tela', dados)
}