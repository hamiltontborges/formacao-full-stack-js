import React from 'react'
import './Header.css';
;


function Header({titulo, subtitulo}) { // desustruturando o props
    return (
        <header className='header'>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </header>
    )
}
export default Header