import React from 'react'
import PorfolioItem from './PorfolioItem'
import './Porfolio.css'

export default function Experience() {
  return (
    <section id='porfolio'>
      <h2>🔸Porfolio</h2>
      <PorfolioItem title='Formulario de Registro' image='./thumbnail.jpg'/>
      <PorfolioItem title='Calculadora Científica' image='./calculator.jpg'/>
      <PorfolioItem title='ToDo List' image='./todo.jpg'/>
    </section>
  )
}
