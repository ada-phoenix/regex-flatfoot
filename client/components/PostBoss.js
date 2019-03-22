import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'
import {clusterUpdater, deathUpdater} from '../util'

class PostBoss extends React.Component {
  constructor() {
    super()
    this.state = {
      updatedUser: false
    }
  }

  async componentDidMount() {
    const nextGame = this.props.location.state.won
      ? clusterUpdater(
          this.props.level,
          this.props.levelstage,
          this.props.clusterId
        )
      : deathUpdater(1, 1, this.props.clusterId)
    await this.props.updateUser(this.props.userId, nextGame)
    this.setState({updatedUser: true})
  }

  componentWillUnmount() {
    this.setState({updatedUser: false})
  }

  render() {
    return this.state.updatedUser && this.props.location.state.won ? (
      <div>
        <h1>{this.props.correct}</h1>
        <button
          type="button"
          onClick={() => this.props.history.push('/question')}
        >
          Continue
        </button>
      </div>
    ) : (
      <div>
        <h1>{this.props.incorrect}</h1>
        <button
          type="button"
          onClick={() => this.props.history.push('/question')}
        >
          Continue
        </button>
      </div>
    )
  }
}

//CONTAINER
const mapState = state => ({
  level: state.user.level || 1,
  levelstage: state.user.levelstage || 1,
  clusterId: state.user.clusterId || 1,
  userId: state.user.id,
  correct: state.cluster.boss.correct,
  incorrect: state.cluster.boss.incorrect
})

const mapDispatch = dispatch => ({
  updateUser: (userId, nextGame) => dispatch(updateUser(userId, nextGame))
})

export default connect(mapState, mapDispatch)(PostBoss)
