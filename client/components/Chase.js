import React from 'react'
import {connect} from 'react-redux'

class Chase extends React.Component {
  render() {
    const {story, location, trail} = this.props.location.state

    return trail === 'hot' ? (
      <div>
        <h1>You arrive at {location}</h1>
        <h1>{story}</h1>
        <button
          type="button"
          onClick={() => {
            this.props.history.push('/boss')
          }}
        >
          Get That Criminal!
        </button>
      </div>
    ) : (
      <div>
        <h1>You arrive at {location}</h1>
        <h1>{story}</h1>
        <button
          type="button"
          onClick={() => {
            this.props.history.goBack()
          }}
        >
          Retrace Your Steps
        </button>
      </div>
    )
  }
}

//Container
export default connect()(Chase)
