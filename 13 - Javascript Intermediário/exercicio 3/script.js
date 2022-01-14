const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

const formCadastro = document.querySelector('#form')
const selectEstados = document.querySelector('#select-estados')
const selectCidades = document.querySelector('#select-cidades')
const divCidades = document.querySelector('#div-cidades')


selectEstados.onchange = e => {
    const estado = e.target.value

    let listaCidades

    if (estado === 'sp') {
        listaCidades = cidades.sp
    }

    if (estado === 'rj') {
        listaCidades = cidades.rj
    }

    let htmlCidades = `<option value='' selected>-- Selecione a Cidade --</option>`

    for (let cidade of listaCidades) {
        htmlCidades += `<option value='${cidade}'>${cidade}</option>`
    }

    selectCidades.innerHTML = htmlCidades
    divCidades.classList.add('visible')
}


form.onsubmit = e => {
    e.preventDefault()

    let temErro = false
    let selectEstado = document.forms['form']['estado']
    let selectCidade = document.forms['form']['cidade']

    if (!selectEstado.value) {
        temErro = true
        selectEstado.classList.add('inputError')

        let span = selectEstado.nextSibling.nextSibling
        span.innerText = 'Selecione o estado'
    } else {
        selectEstado.classList.remove('inputError')

        let span = selectEstado.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!selectCidade.value) {
        temErro = true
        selectCidade.classList.add('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerText = 'Selecione a cidade'
    } else {
        selectCidade.classList.remove('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!temErro) {
        form.submit()
    }
}
