import React from 'react'
import './App.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img className='image' src={props.imgSrc} alt={props.imgAlt} />
        <h1 className='title'>{props.title} </h1>
        <p className='description'>{props.description} </p>
        <a className='card-btn' href={props.href} >{props.link}</a>
    </div>
  )
}

export default Card