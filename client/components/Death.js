import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'

class Death extends React.Component {
  constructor() {
    super()
    this.state = {
      updatedUser: false
    }
  }

  async componentDidMount() {
    const deathPackage = {
      level: 1,
      levelstage: 1,
      clusterId: this.props.clusterId
    }
    console.log('INSIDE COMPONENTDIDMOUNT, DEATHPACKAGE,', deathPackage)
    await this.props.updateUser(this.props.userId, deathPackage)
    this.setState({updatedUser: true})
  }

  componentWillUnmount() {
    this.setState({updatedUser: false})
  }

  render() {
    return this.state.updatedUser ? (
      <div>
        <h1>
          You died. You're a ghost now. But your spirit won't rest until you
          bring the Grepino Crime Family to justice. Go back to the beginning
          and try again.
        </h1>
        <button
          type="button"
          onClick={() => this.props.history.push('/question')}
        >
          Continue
        </button>
      </div>
    ) : (
      <h1>Hold on...</h1>
    )
  }
}

//CONTAINER
const mapState = state => ({
  clusterId: state.user.cluster || 1,
  userId: state.user.id
})

const mapDispatch = dispatch => ({
  updateUser: (userId, nextGame) => dispatch(updateUser(userId, nextGame))
})

export default connect(mapState, mapDispatch)(Death)
