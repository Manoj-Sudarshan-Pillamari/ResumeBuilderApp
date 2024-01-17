import React from 'react'
import Interest from './Interests'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Extracurricular from './Extracurricular'

const Resume = () => {
  return (
    <div>
      <Interest/>
      <Education/>
      <Skills/>
      <Experience/>
      <Extracurricular/>
    </div>
  )
}

export default Resume