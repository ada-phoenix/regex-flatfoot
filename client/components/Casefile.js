import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Casefile extends React.Component {
  render() {
    return (
      <div>
        {this.props.casefile.map(clue => {
          return <h1>{clue}</h1>
        })}
        <Link to="/question">Make with the Questions!</Link>
      </div>
    )
  }
}

//Container
const mapState = state => ({
  casefile: state.user.casefile
})

export default connect(mapState)(Casefile)
