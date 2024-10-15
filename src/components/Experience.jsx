import './experience.css'
import ExperienceItem from './ExperienceItem'

export default function Experience() {
  return (
    <section className='exp-section' id='experience'>
        <h2>🔸 Experience 🔸</h2>
        <ul className="exp-item">
            <ExperienceItem 
                position='Junior Software Developer'
                company='Microsoft'
                date='2018 - Now'    
            />
            <ExperienceItem 
                position='Junior Javascrit Developer'
                company='Google'
                date='2016 - 2018'    
            />
            <ExperienceItem 
                position='Trainee Developer'
                company='Tesla'
                date='2010 - 2016'    
            />
        </ul>
    </section>
  )
}
