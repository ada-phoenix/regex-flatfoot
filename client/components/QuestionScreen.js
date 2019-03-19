import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Prompt from './Prompt'
import Problem from './Problem'
import {getGame} from '../store/game'

/**
 * COMPONENT
 */
class QuestionScreen extends React.Component {
  componentDidMount() {
    this.props.fetchGame({
      cluster: 1,
      level: this.props.level,
      stage: this.props.stage
    })
  }

  render() {
    console.log('question screen props ', this.props)
    return this.props.game.haystack && this.props.level ? (
      <div>
        <div className="container">
          <img src="https://m.media-amazon.com/images/M/MV5BMTY0ODk2NDY5MV5BMl5BanBnXkFtZTgwNTE4MTg3MjE@._V1_.jpg" />
          <Prompt
            lesson={this.props.game.lesson}
            question={this.props.game.question}
          />
        </div>
        <div className="container">
          <Problem
            haystack={this.props.game.haystack}
            needle={this.props.game.needle}
            history={this.props.history}
          />
        </div>
      </div>
    ) : (
      <div>
        <div className="container">
          <img src="https://m.media-amazon.com/images/M/MV5BMTY0ODk2NDY5MV5BMl5BanBnXkFtZTgwNTE4MTg3MjE@._V1_.jpg" />
          <h1>Hold on...</h1>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    level: state.user.level || 1,
    stage: state.user.levelstage || 1,
    cluster: state.user.cluster || 1,
    game: state.game || {}
  }
}

const mapDispatch = dispatch => {
  return {
    fetchGame: currGame => dispatch(getGame(currGame))
  }
}

export default connect(mapState, mapDispatch)(QuestionScreen)

/**
 * PROP TYPES
 */
QuestionScreen.propTypes = {
  // email: PropTypes.string
}
