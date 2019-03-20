import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'

class Correct extends React.Component {
  constructor() {
    super()
  }

  updater(level, levelstage, clusterId) {
    if (level === 3) {
      console.log('clusterId ', clusterId)
      clusterId++
    }
    if (level < 3) {
      level++
    } else {
      level = 1
    }
    console.log('updated ', {level, clusterId})
    return {level, levelstage, clusterId}
  }

  componentDidMount() {
    function updater(level, levelstage, clusterId) {
      if (level === 3) {
        console.log('clusterId ', clusterId)
        clusterId++
      }
      if (level < 3) {
        level++
        levelstage = 1
      } else {
        level = 1
      }
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
    this.props.updateUser(this.props.userId, {
      ...nextGame,
      clue: this.props.game.clue
    })
  }

  render() {
    let story = this.props.game.correct || ''
    return (
      <div className="correctDiv">
        <p>{story}</p>
        <h1>You found a clue! This clue has been added to your casefile!</h1>
        <div className="typewriter">
          <h1>{this.props.game.clue}</h1>
        </div>
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
