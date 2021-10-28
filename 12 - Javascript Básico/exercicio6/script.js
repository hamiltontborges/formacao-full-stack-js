let listaAtores = [{
        nome: 'Keanu Reeves',
        personagem: 'Neo',
        filme: 'The Matrix',
    },
    {
        nome: 'David Prowse',
        personagem: 'Darth Vader',
        filme: 'Star Wars Episódios IV-VI',
    },
    {
        nome: 'Bruce Wayne',
        personagem: 'Batman',
        filme: 'Batman - O Início'
    },
]

let htmlAtores = ''

for(let ator of listaAtores) {

    let mensagem = `Interpreta o personagem ${ator.personagem} no filme ${ator.filme}`

    htmlAtores += `
    <div id="ator" class="ator">
        <h2 id="nome">${ator.nome}</h2>
        <h4 id="mensagem">${mensagem}</h4>
    </div>
    `
}

document.querySelector('#container').innerHTML = htmlAtores
