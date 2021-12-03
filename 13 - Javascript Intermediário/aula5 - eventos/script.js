
let botaoTeste = document.querySelector('#botaoTeste')

// botaoTeste.onclick = () => console.log('mensagem')

let contador = 0

function cliqueBotao() {

    contador++

    console.log('mensagem1');

    if (contador >= 5) {
        botaoTeste.removeEventListener('click', cliqueBotao) //! removeEventListener
    }
}

//! addEventListener
botaoTeste.addEventListener('click', cliqueBotao)

// botaoTeste.addEventListener('click', function(){
//     console.log('mensagem 2');
// })

//! onclick
// botaoTeste.onclick = cliqueBotao