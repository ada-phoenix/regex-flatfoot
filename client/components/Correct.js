import React from 'react'
import history from '../history'

const Correct = () => {
  return (
    <div className="correctDiv">
      <h1>You Did it! Way to go super sleuth</h1>
      <p>Here are some plot details to keep things interesting.</p>
      <button onClick={() => history.push(`/question`)}>Continue</button>
    </div>
  )
}

export default Correct
