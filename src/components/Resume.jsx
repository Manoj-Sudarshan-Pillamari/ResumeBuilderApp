import React from 'react'
import Interest from './Interests'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Extracurricular from './Extracurricular'
import Languages from './Languages'
import data from '../data/data.json'
import '../App.css'

const Resume = () => {
  return (
    <div className='resume-main'>
      {data.interests.length !==0 && <Interest {...data}/>}
      {data.education.length !==0 && <Education {...data}/>}
      {data.skills.length !==0 && <Skills {...data}/>}
      {data.experience.length !==0 && <Experience {...data}/>}
      {data.extracurricular.length !==0 && <Extracurricular {...data}/>}
      {data.languages.length !==0 && <Languages {...data}/>}
    </div>
  )
}

export default Resume