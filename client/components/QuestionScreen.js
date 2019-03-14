import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Prompt from './Prompt'
import Problem from './Problem'

/**
 * COMPONENT
 */
export const QuestionScreen = props => {
  return (
    <div>
      <div className="container">
        <img src="https://m.media-amazon.com/images/M/MV5BMTY0ODk2NDY5MV5BMl5BanBnXkFtZTgwNTE4MTg3MjE@._V1_.jpg" />
        <Prompt />
      </div>
      <div className="container">
        <Problem />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(QuestionScreen)

/**
 * PROP TYPES
 */
QuestionScreen.propTypes = {
  // email: PropTypes.string
}
