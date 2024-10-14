import './main.css'
import Link from './Link'
import Github from '../icons/Github'
import LinkedIn from '../icons/Linkedin'
import YouTube from '../icons/Youtube'

export default function Main() {
  return (
    <main>
        <div>
            <img className='img-main' src="fotoperfil.jpg" alt="" />
        </div>
        <div className='info'>
            <h2>¡Hi!👋</h2>
            <p>I'm a <span>Junior Developer</span> specialized in <br /> <span className="lenguages">React, TypeScript & Tailwind</span> besides <br /> I hace  <span className="exp">+4 months</span> of experience in the sector.</p>
            <div>
                <Link icon={<Github />} text='GitHub' path='https://github.com/AsensiDev'  />
                <Link icon={<LinkedIn />} text='Linkedin' path='https://www.linkedin.com/in/pablo-asensi-cano-405220219/'  />
                <Link icon={<YouTube />} text='Youtube' path='https://www.youtube.com/'  />
            </div>
        </div>
    </main>
  )
}
