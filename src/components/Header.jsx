import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
        <h1>Laura<span className='name'>Asensi</span></h1>

        <nav>
            <a className='a' href="#home">Inicio</a>
            <a className='a' href="#experience">Experience</a>
            <a className='a' href="#porfolio">Porfolio</a>
            <a className='a' href="#about">About</a>
        </nav>
    </header>
  )
}
