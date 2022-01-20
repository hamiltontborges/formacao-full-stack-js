const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conexão com banco de dados
db.connect()

// habilita CORS
// app.use(cors()) -> libera para qualquer domínio que fizer a requisição


// para limitar o CORS

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]

app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        // mobile app
        if (!origin) allowed = true

        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

/*
& ou de maneira simples 

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))

*/

// habilita server para receber dados json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))