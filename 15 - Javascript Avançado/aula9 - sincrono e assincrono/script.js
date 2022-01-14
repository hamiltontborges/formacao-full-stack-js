/* 

SÍNCRONO E ASSINCRONO

*/

function primeira() {
    console.log('primeira')
    for (let index = 0; index < 1000000000; index++) {
        
    }
}

function segunda() {
    console.log('segunda')
}

// setTimeout(primeira, 2000) // assincrono

primeira() // síncrono

segunda()