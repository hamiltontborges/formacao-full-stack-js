let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1);
let nota2 = parseInt(inputNota2);

let mediaMinima = 7;

let media = (nota1 + nota2) / 2;

if (media >= mediaMinima) {
    document.write('Ok. passou de ano!')
} else if (media < mediaMinima) {
    document.write("Ops, não passou de ano")
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('Você foi muito bem continue assim!')
} else if (media >= mediaMinima && media === 9) {
    document.write('Você mandou bem. Vamos tentar um 10 na próxima.')
} else if (media >= mediaMinima && media === 8) {
    document.write('Você foi bem, mas poderia ser melhor.')
} else if (media === mediaMinima) {
    document.write('Você ficou na média.')
} else if (media <= mediaMinima && media === 6) {
    document.write('Faltou pouco')
}