import React from 'react'
import {connect} from 'react-redux'

class Crossroads extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="container" />
        </div>
        <div>
          <div className="container" />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    level: state.user.level || 1,
    stage: state.user.levelstage || 1,
    cluster: state.user.cluster || 1,
    game: state.game || {},
    casefile: state.user.casefile
  }
}

// const mapDispatch = dispatch => {
//   return {
//     fetchGame: currGame => dispatch(getGame(currGame))
//   }
// }

export default connect(mapState)(QuestionScreen)
