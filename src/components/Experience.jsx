import React from 'react'

const Experience = (props) => {
  return (
    <div className='content'>
            <h3>Experience</h3>
      {props.experience.map((expData)=>{
        return(
        <div key={expData.yoj} style={{paddingBottom:"1%"}}>
          <span><b style={{fontWeight:"bolder", fontSize:"19px"}}>{expData.company},</b>&nbsp;&nbsp;<i>{expData.yoj} - {expData.yoe}</i></span>
          <p style={{borderBottom:"1px dotted", maxWidth:"fit-content", fontWeight:"bold"}}><i>Role: {expData.role}</i></p>
          <p>{expData.about}</p>
        </div>
      )}
      )}
    </div>
  )
}

export default Experience
