/* 

AJAX - Asynchronous JavaScript and XML - 2005

ROTAS ou ENDPOINT - caminho para obter informação

*/

const xhttp = new XMLHttpRequest()

const divAlbuns = document.querySelector('.div-photos')
let listPhotos = []

function printCards(response) {
    response.forEach(photo => {
        listPhotos += `
        <div class="card">
            <img src="${photo.thumbnailUrl}" alt="">
            <h5 class="titulo">${photo.title}</h5>
        </div>
        `
    })

    divAlbuns.innerHTML = listPhotos
}

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)
        printCards(response)
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true) //true para assíncrono e false para síncrono
xhttp.send()