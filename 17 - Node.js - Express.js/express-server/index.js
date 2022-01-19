const express = require('express')
const path = require('path')
const fs = require('fs')
const { urlencoded } = require('express')

const app = express()

// definindo o template engine
app.set('view engine', 'ejs')


// Definindo os arquivos estáticos - usar somente quando não estiver usando um template engine
// app.use(express.static(path.join(__dirname, 'views'))) // maneira reduzida

// Definindo os arquivos públicos
const publicFolder = path.join(__dirname, 'public') // maneira mais didática
const expressPublic = express.static(publicFolder)
app.use(expressPublic)

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extended: true}))


// funções
function readPosts() {
    const resultPosts = fs.readFileSync('./store/posts.json')
    return JSON.parse(resultPosts)
}


//  rotas
app.get('/', (req, res) => {
    res.render('index', { // tirar o views/ quando estiver usando o template engine
        title: 'Empreendimentos Imobiliários'
    })
})

app.get('/posts', (req, res) => {
    const listPosts = readPosts()

    res.render('posts', {
        title: 'EI - Posts',
        posts: listPosts,
    })
})

app.get('/cadastro-posts', (req, res) => {
    const { c } = req.query
    res.render('cadastro-posts', {
        title: 'EI - Inserir Post',
        cadastrado: c,
    })
})

app.get('/produtos', (req, res) => {
    res.render('produtos', {
        title: "EI - Produtos"
    })
})

app.get('/servicos', (req, res) => {
    res.render('servicos', {
        title: 'EI - Serviços'
    })
})

app.get('/contato', (req, res) => {
    res.render('contato', {
        title: 'EI - Contato'
    })
})

app.post('/salvar-post', (req, res) => {
    const { titulo, texto } = req.body

    const data = fs.readFileSync('./store/new-posts.json')
    const posts = JSON.parse(data)

    posts.push({
        titulo,
        texto,
    })

    const postsString = JSON.stringify(posts)
    
    fs.writeFileSync('./store/new-posts.json', postsString)

    res.redirect('/cadastro-posts?c=1')
})

// 404 error (not found)
app.use((req, res) => { //middleware
    res.send('Página não encontrada')
})


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Serve is listening on port ${port}`))
