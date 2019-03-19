import React from 'react'
import history from '../history'

const Incorrect = () => {
  return (
    <div className="incorrectDiv">
      <h1>Uh oh! Looks like those wiley criminals tripped you up.</h1>
      <button onClick={() => history.push(`/question`)}>Continue</button>
    </div>
  )
}

export default Incorrect
