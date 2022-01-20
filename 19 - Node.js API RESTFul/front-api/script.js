const productsList = document.querySelector('#products-list')
const form = document.querySelector('#form')

const API_URL = 'http://localhost:8080/api/products'

// Obtem a lista de produtos
function obterLista() {

    fetch(API_URL).then(response => {
        response.json().then(data => {
            const productsHtml = data.map(product => `
            <li>
                ${product.name} - ${product.brand} - R$ ${product.price}
            </li>
            `).join('')
    
            productsList.innerHTML = productsHtml
        })
    })
}

obterLista()

// Ao cadastrar um produto

form.onsubmit = function(e) {
    e.preventDefault()

    const name = document.forms['form'].name.value
    const brand = document.forms['form'].brand.value
    const price = document.forms['form'].price.value

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            brand,
            price
        })
    }).then(response => {
        response.json().then(data => {
            if (data.message === 'sucess') {
                form.reset()
                obterLista()
                alert('Cadastro realizado com sucesso!')
            } else {
                alert('Ops, ocorreu um erro. Tente novamewnte!')
            }
        })
    })
}