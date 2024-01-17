import React from 'react'

const Extracurricular = (props) => {
  return (
    <div className='content'>
      {props.extracurricular.map((extData) => {
        return (
          <div key={extData}>
            <ul>
              <li>{extData}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Extracurricular
