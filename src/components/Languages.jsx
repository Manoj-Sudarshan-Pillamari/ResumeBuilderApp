import React from 'react'

const Languages = (props) => {
  const lastData = props.languages.slice(-1)
  return (
    <div className='content'>
      <h3>Languages</h3>
      <div style={{display:"flex", flexWrap:"wrap"}}>
      {props.languages.map((langData)=>{
        return(
          <div key={langData}>
            {langData}{langData === lastData ? "" : ","}&nbsp;&nbsp;
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Languages