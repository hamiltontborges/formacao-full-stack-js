/* 

FETCH

*/


const botaoCarregar = document.querySelector('#botaoCarregar')


function exibirNaTela(dados) {
    console.log('Exibir na tela', dados)
}

function exibirErro() {
    console.log('Ops, deu erro!')
}

function transformarEmJson(response) {
    
    return response.json()
}

botaoCarregar.onclick = () =>
    fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'GET'
    })
        .then(transformarEmJson)
        .then(exibirNaTela)
        .catch(exibirErro)





