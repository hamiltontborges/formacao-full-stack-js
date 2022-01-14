const clientes = [
    { name: 'João', lastname: 'da Silva', age: 10 },
    { name: 'Pedro', lastname: 'Santos', age: 25 },
    { name: 'Joaquim', lastname: 'Pereira', age: 65 },
    { name: 'Manoel', lastname: 'Cardoso', age: 14 },
]

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18)

console.log(clientesMaiores);