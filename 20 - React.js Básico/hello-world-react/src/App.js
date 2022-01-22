import React from 'react'
import Header from './Header'
import Content from './Content'
import Card from './Card'
import Cards from './Cards'
import imgReact from './images/reactJS.png'
import imgNode from './images/nodejs.jpg'
import imgNext from './images/nextjs.png'

/* 
    COMPONENTES - Criando e Usando
    - Função que retonr JSX
        - Sempre tem que ter um element pai
        - React Fragmen <> </>
    - Exportar função
    - Para usar o componente:
        - Importar
        - Usar com tag:  ex.: <App />
    - Componentes podem receber propriedades: ex.: <Header titulo="texto" />
*/

function App () {
    return(
        <>
            <Header titulo="HELLO WORLD" subtitulo="Outro texto"/>
            <Content titulo="Bem-vindo">
                <p>Integer vestibulum felis eu dictum imperdiet. Duis venenatis felis nec nulla dignissim, a bibendum tellus interdum. Sed nisi nisl, dictum vitae eleifend sit amet, blandit sit amet risus. Mauris nec volutpat tellus. Donec eu suscipit lacus, vulputate ultricies magna. Proin gravida interdum ipsum, a accumsan elit condimentum et. Vivamus convallis lectus a diam congue, a pulvinar eros consectetur.</p>

                <p>Integer vestibulum felis eu dictum imperdiet. Duis venenatis felis nec nulla dignissim, a bibendum tellus interdum. Sed nisi nisl, dictum vitae eleifend sit amet, blandit sit amet risus. Mauris nec volutpat tellus. Donec eu suscipit lacus, vulputate ultricies magna. Proin gravida interdum ipsum, a accumsan elit condimentum et. Vivamus convallis lectus a diam congue, a pulvinar eros consectetur.</p>

                <p>Integer vestibulum felis eu dictum imperdiet. Duis venenatis felis nec nulla dignissim, a bibendum tellus interdum. Sed nisi nisl, dictum vitae eleifend sit amet, blandit sit amet risus. Mauris nec volutpat tellus. Donec eu suscipit lacus, vulputate ultricies magna. Proin gravida interdum ipsum, a accumsan elit condimentum et. Vivamus convallis lectus a diam congue, a pulvinar eros consectetur.</p>

                <Cards>
                    <Card
                        imagem={imgReact}
                        titulo="Titulo 1"
                        texto="Integer vestibulum felis eu dictum imperdiet. Duis venenatis felis nec nulla dignissim, a bibendum tellus interdum. Sed nisi nisl, dictum vitae eleifend sit amet, blandit sit amet risus."
                    />

                    <Card
                        imagem={imgNode}
                        titulo="Titulo 2"
                        texto="Integer vestibulum felis eu dictum imperdiet. Duis venenatis felis nec nulla dignissim, a bibendum tellus interdum. Sed nisi nisl, dictum vitae eleifend sit amet, blandit sit amet risus."
                    />

                    <Card
                        imagem={imgNext}
                        titulo="Titulo 3"
                        texto="Integer vestibulum felis eu dictum imperdiet. Duis venenatis felis nec nulla dignissim, a bibendum tellus interdum. Sed nisi nisl, dictum vitae eleifend sit amet, blandit sit amet risus."
                    />
                </Cards> 
            </Content>
        </>
    )
}

export default App