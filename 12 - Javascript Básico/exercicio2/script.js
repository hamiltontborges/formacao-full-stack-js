
let nome = prompt('Digite seu nome')
let inputIdade = prompt('Digite sua idade')

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

let mensagem = `Olá ${nome}, você é ${maiorOuMenor} de idade! ${mensagemPersonalizada}`

document.write(mensagem)