import React from 'react'

const Skills = (props) => {
  const lastData = props.skills.slice(-1)
  return (
    <div className='content'>
      <h3>Skills</h3>
      <div style={{display:"flex", flexWrap:"wrap"}}>
      {props.skills.map((skillData)=>{
        return(
          <div key={skillData}>
            {skillData}{skillData === lastData ? "" : ","}&nbsp;&nbsp;
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Skills
