import React from 'react'
import ExperienceItem from './ExperienceItem'
import './Experience.css'

export default function Experience() {
  return (
    <section>
      <h2>🔸Porfolio</h2>
      <ExperienceItem title='Formulario de Registro' image='./thumbnail.jpg'/>
      <ExperienceItem title='Calculadora Científica' image='./calculator.jpg'/>
      <ExperienceItem title='ToDo List' image='./todo.jpg'/>
    </section>
  )
}
