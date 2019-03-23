import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'
import {correctUpdater} from '../util'

class Correct extends React.Component {
  constructor() {
    super()
    this.whichScreen = this.whichScreen.bind(this)
    this.state = {
      displayPopUp: false
    }
    this.displayPopUp = this.displayPopUp.bind(this)
  }

  displayPopUp() {
    this.setState({displayPopUp: true}, () => {
      setTimeout(() => {
        this.setState({displayPopUp: false})
      }, 2000)
    })
  }

  whichScreen() {
    if (this.props.level === 4) {
      history.push(`/crossroads`)
    } else {
      history.push(`/question`)
    }
  }

  componentDidMount() {
    let nextGame = correctUpdater(
      this.props.level,
      this.props.levelstage,
      this.props.clusterId
    )
    this.props.updateUser(this.props.userId, {
      ...nextGame,
      clue: this.props.game.clue
    })
    this.displayPopUp()
  }

  render() {
    let story = this.props.game.correct || ''
    return (
      <div className="correctDiv">
        {this.state.displayPopUp && (
          <div className="popup">A clue has been added to your casefile!</div>
        )}
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
    clusterId: state.user.clusterId || 1,
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
