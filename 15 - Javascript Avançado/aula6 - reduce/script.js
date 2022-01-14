const clientes = [
    { name: 'João', lastname: 'da Silva', age: 10 },
    { name: 'Pedro', lastname: 'Santos', age: 25 },
    { name: 'Joaquim', lastname: 'Pereira', age: 65 },
    { name: 'Manoel', lastname: 'Cardoso', age: 14 },
]

// acc = accumulator
// curr = current

const clientesFinal = clientes.reduce((acc, curr) => {
    if(curr.age >= 18) {
        acc.maior.push(curr)
    } else {
        acc.menor.push(curr)
    }

    return acc
}, {
    maior: [],
    menor: []
})

console.log(clientesFinal)



const numeros = [1, 2, 3, 4]

const numerosFinal = numeros.reduce((acc, curr) =>{

    if(numeros.indexOf(curr) === 0) {
        acc += `${curr + 1}`
    } else {
        acc += ` - ${curr + 1}`
    }

    return acc
}, '')

console.log(numerosFinal)