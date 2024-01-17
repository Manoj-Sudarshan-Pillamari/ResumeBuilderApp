import React from 'react'

const Interests = (props) => {
  return (
    <div className='content'>
      {props.interests.map((intData) => {
        return (
          <div key={intData}>
            <ul>
              <li>{intData}</li>
            </ul>
          </div>
        )
      }
      )}
    </div>
  )
}

export default Interests
