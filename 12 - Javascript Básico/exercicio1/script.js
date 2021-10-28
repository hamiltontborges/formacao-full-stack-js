let nome = prompt('Digite seu nome')
let inputIdade = prompt('Digite sua idade')

let idade = parseInt(inputIdade)

let maiorOuMenor

if (idade >= 18) {
    maiorOuMenor = 'MAIOR'
} else {
    maiorOuMenor = 'MENOR'
}

let mensagem = `Olá ${nome}, você é ${maiorOuMenor} de idade!`

document.write(mensagem)