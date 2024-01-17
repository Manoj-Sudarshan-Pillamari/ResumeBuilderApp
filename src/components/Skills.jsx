import React from 'react'

const Skills = (props) => {
  const lastData = props.skills.slice(-1)

  console.log(lastData)
  return (
    <div style={{display:"flex", flexWrap:"wrap"}} className='content'>
      {props.skills.map((skillData)=>{
        return(
          <div key={skillData}>
            {skillData}{skillData == lastData ? "" : ","}&nbsp;&nbsp;
            </div>
        )
      })}
    </div>
  )
}

export default Skills
