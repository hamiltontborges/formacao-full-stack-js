/* 

HOISTING (ERGUER)

É o comportamento padrão do JS de mover as declarações para o topo de um escopo.

*/

function teste() {
    
    function outraFuncao() {
        console.log('OK, sou a outra função');
    }
    outraFuncao() /* A boa prática é todas as declarações estarem no topo do escopo */
}

teste()