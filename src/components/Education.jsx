import React from 'react'

const Education = (props) => {
  return (
    <div className='content'>
        {props.education.map((edData)=>{
          return(
          <div key={edData.year}>
            <ul>
              <li>
                <b>{edData.std},</b>&nbsp;&nbsp;<i>{edData.year}</i>
              </li>
            </ul>
          </div>
          )})}
    </div>
  )
}

export default Education
