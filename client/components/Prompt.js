import React from 'react'

const Prompt = props => {
  return (
    <div>
      <div className="container">
        <div className="typewriter">
          <div>{props.lesson}</div>
          <div>{props.question}</div>
        </div>
      </div>
    </div>
  )
}

export default Prompt
