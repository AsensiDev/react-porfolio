import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header id='header'>
        <h1>Amelia<span className='name'>Anderson</span></h1>

        <nav>
            <a className='a' href="#home">Home</a>
            <a className='a' href="#porfolio">Porfolio</a>
            <a className='a' href="#experience">Experience</a>
            <a className='a' href="#contact">Contact</a>
        </nav>
    </header>
  )
}
