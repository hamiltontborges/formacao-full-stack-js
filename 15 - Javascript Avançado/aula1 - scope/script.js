/* 
GLOBAL
LOCAL

- O escopo determina a visibildiade de uma varíavel
- As funções do JS criam o seu próprio escopo
    - As variáveis de uma função não são acessíveis fora dela

*/

function teste() {
    let a = 123
    console.log(a);
}

teste()

console.log(a) /* Não consegue acessar - dá erro */