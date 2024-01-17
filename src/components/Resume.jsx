import React from 'react'
import Interest from './Interests'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Extracurricular from './Extracurricular'
import data from '../data/data.json'
import '../App.css'

const Resume = () => {
  return (
    <div className='resume-main'>
      <h3>Interests</h3>
      <Interest {...data}/>
      <h3>Education</h3>
      <Education {...data}/>
      <h3>Skills</h3>
      <Skills {...data}/>
      <h3>Experience</h3>
      <Experience {...data}/>
      <h3>Extracurricular</h3>
      <Extracurricular {...data}/>
    </div>
  )
}

export default Resume