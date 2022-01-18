
const aluno ={
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}

const notas = aluno.notas
const totalBimestres = notas.length

const totalNotas = notas.reduce((acc, curr) =>{
    return acc + curr
}, 0)

const media = Math.round(totalNotas / totalBimestres)

console.log(`A média da ${aluno.nome} foi ${media} para o total de ${totalBimestres} bimestres.`)