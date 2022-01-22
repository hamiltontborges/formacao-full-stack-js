import React from 'react'
import './Card.css'

const Card = ({titulo, texto, imagem}) => {
  return (
    <div className='card'>
        <img src={imagem}/>
        <h3>{titulo}</h3>
        <p>{texto}</p>
    </div>
  )
}

export default Card
