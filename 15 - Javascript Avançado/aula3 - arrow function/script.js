/*

ARROW FUNCTIONS

ES6

As funções de seta nos permitem escrever uma sintaxe de função mais curta.

*/

const soma = (param1, param2) => param1 + param2 /* Retorno implícito */

const resultado = soma(12, 2)

console.log(resultado)

const teste = param1 => param1 /* Quando tem 1 parametro pode remover os parenteses */

console.log(teste('Ok'))

const botao = document.querySelector('#botao')

botao.onclick = function () {
    console.log(this)
}

/*botao.onclick = () => console.log(this)  Na arrow function, o escopo do 'this' é sempre o escopo de que a chamou (onde foi declarada)*/