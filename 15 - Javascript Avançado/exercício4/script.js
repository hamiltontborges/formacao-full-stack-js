const alunos = [
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        nota: 10,
    },
    {
        nome: 'José',
        sobrenome: 'Moreira',
        nota: 4,
    },
    {
        nome: 'Paulo',
        sobrenome: 'Henrique',
        nota: 7,
    },
    {
        nome: 'Sara',
        sobrenome: 'Souza',
        nota: 5,
    },
    {
        nome: 'Clara',
        sobrenome: 'Barbosa',
        nota: 9,
    },
    {
        nome: 'Rodrigo',
        sobrenome: 'Barros',
        nota: 4,
    },
    {
        nome: 'Renato',
        sobrenome: 'Barros',
        nota: 7,
    },
    {
        nome: 'Andrea',
        sobrenome: 'Batista',
        nota: 6,
    },
    {
        nome: 'Carla',
        sobrenome: 'Campos',
        nota: 3,
    },
]

const btnFiltar = document.querySelector('#btn-filtrar')
const listAlunos = document.querySelector('#list-alunos')
const inputNota = document.querySelector('#input-nota')
let resultadoAlunos = []

btnFiltar.onclick = pesquisaAlunos

function pesquisaAlunos() {
    event.preventDefault()
    let resultado = filtraAlunos()
    imprimeAlunos(resultado)
    inputNota.value = ''
    resultadoAlunos = ''
}

function filtraAlunos() {
    let nota = parseInt(inputNota.value)
    const filtroAlunos = alunos.filter(aluno => aluno.nota === nota)
    return filtroAlunos
}

function imprimeAlunos(resultado) {
    console.log(resultado.length)
    if (resultado.length) {
        resultado.forEach(aluno => {
            resultadoAlunos += `
                <li> ${aluno.nome} ${aluno.sobrenome} | Nota: ${aluno.nota} </li>
            `
            listAlunos.innerHTML = resultadoAlunos
        })
    } else {
        resultadoAlunos += '<span>Nenhum aluno tirou essa nota.</span>'
    }

    listAlunos.innerHTML = resultadoAlunos
}

/* SOLUÇÃO DO PROFESSOR

    const formulario = document.querySelector('#formulario')
    const listaAlunos = document.querySelector('#listaAlunos')
    const mensagem = document.querySelector('#mensagem')

    formulario.onsubmit = e => {
        e.preventDefault()

        const nota = document.forms.formulario.inputNota.value
        filtrarAluno(nota)
    }

    function filtrarAluno(nota) {            
        let htmlAlunos = alunos.reduce((acc, curr) => {
        if (curr.nota == nota) {
            acc += `
            <li>
                ${curr.nome} ${curr.sobrenome} | Nota: ${curr.nota}
            </li>
            `
        }

        return acc
        }, '')

        if (htmlAlunos) {
        listaAlunos.innerHTML = htmlAlunos
        mensagem.innerText = ''
        } else {
        listaAlunos.innerHTML = ''
        mensagem.innerText = 'Nenhum aluno tirou essa nota.'
        }

        document.forms.formulario.inputNota.value = ''
    }



*/