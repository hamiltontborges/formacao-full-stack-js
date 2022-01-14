/* 

LOCAL STORAGE - armazenamento local (navegador do usuário)

*/

const tarefas = [
    { tarefa: 'estudar js'},
    { tarefa: 'estudar node.js'},
    { tarefa: 'estudar react.js'},
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefas', tarefasJson)

const valores = localStorage.getItem('tarefas')

console.log(valores)

const valorObjt = JSON.parse(valores)

console.log(valorObjt)