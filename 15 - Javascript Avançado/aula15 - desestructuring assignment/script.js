/* 

DESTRUCTURING ASSIGNMENT (desestruturação de atribuição)

*/

// EXEMPLO: _________________________________

const obj = {
    nome: 'fulano',
    idade: 32,
}

const { 
    nome: nomeDoUsuario, 
    idade 
} = obj

console.log(nomeDoUsuario, idade)

// __________________________________________


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
    
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1') //para ter um 'await' a função que está após tem que ser uma Promise
        .then(transformarEmJson)
        .catch(exibirErro)

    const { name, email, phone } = dados

    console.log(name, email, phone)
}







