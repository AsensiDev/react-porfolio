import React from 'react'

export default function ExperienceItem({position, company, date}) {
  return (
    <li>
        <h2>{position}</h2>
        <h3>{company}</h3>
        <strong>{date}</strong>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur rem non minus fugit accusantium sit asperiores! Vero placeat nobis, quod, minima alias saepe sapiente ut impedit nostrum ab aliquam.</p>
    </li>
  )
}
