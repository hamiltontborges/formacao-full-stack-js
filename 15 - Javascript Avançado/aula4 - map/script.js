const clientes = [
    { name: 'João', lastname: 'da Silva' },
    { name: 'Pedro', lastname: 'Santos' },
    { name: 'Joaquim', lastname: 'Pereira' },
    { name: 'Manoel', lastname: 'Cardoso' },
]

/* O MAP sempre retorna um array, atribuindo a uma variável */

const clientesFinal = clientes.map(cliente => `${cliente.name} ${cliente.lastname}`)

console.log(clientesFinal)