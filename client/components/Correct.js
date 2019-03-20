import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'

class Correct extends React.Component {
  constructor() {
    super()
    this.whichScreen = this.whichScreen.bind(this)
  }

  whichScreen() {
    if (this.state.level === 4) {
      history.push(`/crossroads`)
    } else {
      history.push(`/question`)
    }
  }

  componentDidMount() {
    function updater(level, levelstage, clusterId) {
      level++
      levelstage = 1
      return {level, levelstage, clusterId}
    }

    let nextGame = updater(
      this.props.level,
      this.props.levelstage,
      this.props.clusterId
    )
    this.props.updateUser(this.props.userId, nextGame)
  }

  render() {
    let story = this.props.game.correct || ''
    return (
      <div className="correctDiv">
        <p>{story}</p>
        <button type="button" onClick={this.whichScreen}>
          Continue
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    level: state.user.level || 1,
    levelstage: state.user.levelstage || 1,
    clusterId: state.user.cluster || 1,
    game: state.game || {},
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    updateUser: (userId, nextGame) => dispatch(updateUser(userId, nextGame))
  }
}

export default connect(mapState, mapDispatch)(Correct)
