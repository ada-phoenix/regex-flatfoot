import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'

class Correct extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    function updater(level, levelstage, clusterId) {
      if (level < 3) {
        level++
      } else {
        level = 1
      }
      levelstage = 1
      console.log(
        'level ',
        level,
        'levelstage ',
        levelstage,
        'clusterId ',
        clusterId
      )
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
        <button onClick={() => history.push(`/question`)}>Continue</button>
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
