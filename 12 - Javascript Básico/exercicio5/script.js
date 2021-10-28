let inputNumero = prompt('Escolha um número para mostrar a tabuada')

let numero = parseInt(inputNumero)


for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    let multiplicacao = numero * multiplicador
    document.write(`${numero} x ${multiplicador} = ${multiplicacao}<br>`)
}