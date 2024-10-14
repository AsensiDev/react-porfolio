import HTML5 from '../icons/Html'
import CSS  from '../icons/Css'
import JavaScript from '../icons/JavaScript'
import './experienceItem.css'

export default function ExperienceItem() {
  return (
    <div className='exp-item'>
        <div>
          <img className='exp-img' src="./thumbnail.jpg" alt="" />
        </div>
        <div className='exp-info'>
          <h3>titulo del proyecto</h3>
          <div className="tech">
            <HTML5 />
            <CSS />
            <JavaScript />
          </div>
        </div>
      </div>
  )
}
