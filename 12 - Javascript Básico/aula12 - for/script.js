
let opcoes;

for (let contador = 2021; contador >= 1900; contador--) {
    opcoes += `<option>${contador}</option>`
}

let selecionar = '<option>-- Selecionar --</option>'

document.querySelector('#ano').innerHTML = selecionar + opcoes


let lista = ''

let clientes = ['Luiz', 'José', 'Pedro', 'Joaquim']

for (let contador = 0; contador < clientes.length; contador++) {
    lista += `<li>${clientes[contador]}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista