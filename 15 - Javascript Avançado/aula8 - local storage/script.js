/* 

JSON - JavaScript Object Notation

*/

const objeto = {
    'nome': 'Fulano',
    'idade': 32
}

const json = JSON.stringify(objeto)

console.log(json)

const jsonParseado = JSON.parse(json)

console.log(jsonParseado)
