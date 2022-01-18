/* 

ASYNC / AWAIT

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

botaoCarregar.onclick = aoClicarNoBotao


async function aoClicarNoBotao() {
    
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos') //para ter um 'await' a função que está após tem que ser uma Promise
        .then(transformarEmJson)
        .catch(exibirErro)

    console.log(dados)
}





