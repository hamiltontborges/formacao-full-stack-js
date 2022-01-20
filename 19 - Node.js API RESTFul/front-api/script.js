const productsList = document.querySelector('#products-list')
const form = document.querySelector('#form')
const formEdit = document.querySelector('#formEdit')
const edit = document.querySelector('#edit')
const cadastro = document.querySelector('#cadastro')


const API_URL = 'http://localhost:8080/api/products'


// Adiciona efeito de click no botão editar
function adicionadaEventoBotaoEditar() {
    
        const botoesEditar = document.querySelectorAll('.botao-editar')
        botoesEditar.forEach(botao => {
            botao.onclick = function (e) {
                e.preventDefault()

                edit.classList.remove('hidden')
                cadastro.classList.add('hidden')

                const id = this.dataset.id
                const name = this.dataset.name
                const brand = this.dataset.brand
                const price = this.dataset.price

                document.forms['formEdit'].id.value = id
                document.forms['formEdit'].name.value = name
                document.forms['formEdit'].brand.value = brand
                document.forms['formEdit'].price.value = price
            }
        })
}

// Adiciona efeito de click no botão excluir
function adicionadaEventoBotaoExcluir() {
    const botoesExcluir = document.querySelectorAll('.botao-excluir')
    botoesExcluir.forEach(botao => {
        botao.onclick = function (e) {
            e.preventDefault()
            const id = this.dataset.id

            fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            }).then(response => {
                response.json().then(data => {
                    if (data.message === 'success') {
                        alert('Produto excluído com sucesso!')
                        obterLista()
                    } else {
                        alert('Ops, ocorreu um erro. Tente novamente!')
                    }
                })
            })
        }
    })
}

// Obtem a lista de produtos
function obterLista() {

    fetch(API_URL).then(response => {
        response.json().then(data => {
            const productsHtml = data.map(product => `
            <li>
                <b>${product.name}</b> - ${product.brand} - R$ ${product.price} -- 
                <a 
                    href="#" 
                    class="botao-editar" 
                    data-id="${product._id}"
                    data-id="${product._id}" 
                    data-name="${product.name}" 
                    data-brand="${product.brand}" 
                    data-price="${product.price}"
                >
                    [editar]
                </a> - 
                <a 
                    href="#" 
                    class="botao-excluir" 
                    data-id="${product._id}" 
                >
                    [excluir]
                </a>
            </li>
            `).join('')

            productsList.innerHTML = productsHtml

            adicionadaEventoBotaoExcluir()
            adicionadaEventoBotaoEditar()
        })
    })
}

obterLista()

// Ao cadastrar um produto
form.onsubmit = function (e) {
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
            if (data.message === 'success') {
                form.reset()
                obterLista()
                alert('Cadastro realizado com sucesso!')
            } else {
                alert('Ops, ocorreu um erro. Tente novamewnte!')
            }
        })
    })
}

// Ao editar um produto
formEdit.onsubmit = function(e) {
    e.preventDefault()

    const id = document.forms['formEdit'].id.value
    const name = document.forms['formEdit'].name.value
    const brand = document.forms['formEdit'].brand.value
    const price = document.forms['formEdit'].price.value

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            brand,
            price,
        })
    }).then(response => {
        response.json().then(data => {
            if (data.message === 'success') {
                alert('Produto alterado com sucesso!')
                formEdit.reset()
                edit.classList.add('hidden')
                cadastro.classList.remove('hidden')
                obterLista()
            } else {
                alert('Ops, ocorreu um erro. Tente novamente!')
            }
        })
    })
}