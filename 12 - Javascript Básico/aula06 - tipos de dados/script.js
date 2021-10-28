/*

string
number
boolean
array
object
undefined
null

*/

//! string
let nome = "Luiz";
console.log(nome);

//! string - concatenada
let sobrenome = "Souza";
console.log(nome + ' ' + sobrenome);

//! string literal
console.log(`${nome} ${sobrenome}`);

//! number
let idade = 35;
console.log(idade);
console.log(idade + 5);

let porcentagem = 10.2 // float

//! boolean (true ou false)
let maiorDeIdade = true;
console.log(maiorDeIdade);

let menorDeIdade = false;
console.log(menorDeIdade);

//! array
let habilidades = ['HTML', 'CSS', 'Javascript'];
console.log(habilidades);
console.log(habilidades.length);
console.log(habilidades[1]);
console.log(habilidades[4]);

//! object
let pessoa = {
    nome: 'Luiz',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['C++', 'C#', 'Python']
}
console.log(pessoa);
console.log(pessoa.nome);

//! undefined
let endereco;
console.log(endereco);

//! null
let cidade = null;
console.log(cidade);

