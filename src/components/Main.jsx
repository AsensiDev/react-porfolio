import './main.css'
import Link from './Link'
import Github from '../icons/Github'
import LinkedIn from '../icons/Linkedin'
import YouTube from '../icons/Youtube'

export default function Main() {
  return (
    <main>
        <div>
            <img src="fotoperfil.jpg" alt="" />
        </div>
        <div className='info'>
            <h2>¡Hola!👋</h2>
            <p>Soy <span>Desarrollador Junior</span> especializado en <br /> <span className="lenguages">React, TypeScript & Tailwind</span> y además <br /> cuento con <span className="exp">+4 meses</span> de experiencia en el sector.</p>
            <div>
                <Link icon={<Github />} text='GitHub' path='https://github.com/AsensiDev'  />
                <Link icon={<LinkedIn />} text='Linkedin' path='https://www.linkedin.com/in/pablo-asensi-cano-405220219/'  />
                <Link icon={<YouTube />} text='Youtube' path='https://www.youtube.com/'  />
            </div>
        </div>
    </main>
  )
}
