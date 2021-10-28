
function comecar() {
    let nome = prompt('Digite seu nome')
    let inputIdade = prompt('Digite sua idade')

    if (nome === '' || inputIdade === '') {
        alert('Preencha os campos corretamente')
        return
    }

    let idade = parseInt(inputIdade)
    
    let maiorOuMenor
    
    if (idade >= 18) {
        maiorOuMenor = 'MAIOR'
    } else {
        maiorOuMenor = 'MENOR'
    }
    
    let mensagemPersonalizada = ''
    
    if(idade >= 18 && nome.toLowerCase() === 'thomas anderson') {
        mensagemPersonalizada = 'Você é personagem do filme Matrix'
    }
    
    let mensagem = `Olá ${nome.toUpperCase()}, você é ${maiorOuMenor} de idade! `
    
    document.querySelector('#mensagem').innerHTML = mensagem
    document.querySelector('#msgPersonalizada').innerHTML = mensagemPersonalizada
}
