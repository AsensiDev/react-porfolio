import HTML5 from '../icons/Html'
import CSS  from '../icons/Css'
import JavaScript from '../icons/JavaScript'
import './porfolioItem.css'
import Link from './Link'
import Github from '../icons/Github'
import Netlify from '../icons/Netlify'

export default function PorfolioItem( { title, image} ) {
  return (
    <div className='porf-item'>
        <div>
          <img className='porf-img' src={image} alt={title} />
        </div>
        <div className='porf-info'>
          <h3>{title}</h3>
          <div className="tech">
            <HTML5 />
            <CSS />
            <JavaScript />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur totam, hic asperiores eaque ipsam sapiente mollitia laboriosam suscipit distinctio ullam enim ad odio quas.</p>
          <div className="porf-buttons">
            <Link icon={<Github />} text='Code' path='https://www-youtube.com'/>
            <Link icon={<Netlify />} text='Preview' path='https://www-youtube.com'/>
          </div>
        </div>
      </div>
  )
}
