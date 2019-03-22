import React from 'react'

const Prompt = props => {
  return (
    <div>
      <div className="container">
        <div className="typewriter">
          <h1>{props.lesson}</h1>
          <h1>{props.question}</h1>
        </div>
      </div>
    </div>
  )
}

export default Prompt
