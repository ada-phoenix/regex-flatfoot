import React from 'react'
import {connect} from 'react-redux'
import {getCluster} from '../store/cluster'

class Crossroads extends React.Component {
  constructor() {
    super()
    this.state = {
      gotCluster: false
    }
  }

  async componentDidMount() {
    await this.props.fetchCluster(this.props.clusterId)
    this.setState({gotCluster: true})
  }

  componentWillUnmount() {
    this.setState({gotCluster: false})
  }

  clickHandler(location, story) {
    const correctLocation = this.props.cluster.correctlocation
    const trail = location === correctLocation ? 'hot' : 'cold'
    this.props.history.push('/chase', {location, story, trail})
  }

  render() {
    const locations = this.props.cluster.locations
    console.log('cluster ', this.props.cluster)
    return this.state.gotCluster ? (
      <div>
        <div className="container">
          <h1>Let's review the clues</h1>
        </div>
        <div className="clues">
          {this.props.casefile.map((clue, i) => {
            return (
              <h2>
                {`${i + 1}) `}
                {clue}
              </h2>
            )
          })}
        </div>
        <h1>Now, where to go...</h1>
        <div className="container">
          {locations.map(location => {
            return (
              <button
                key={location[0]}
                type="button"
                onClick={() => this.clickHandler(location[0], location[1])}
              >
                {location[0]}
              </button>
            )
          })}
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

const mapState = state => {
  return {
    clusterId: state.user.clusterId || 1,
    game: state.game || {},
    casefile: state.user.casefile || [],
    cluster: state.cluster || {}
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCluster: clusterId => dispatch(getCluster(clusterId))
  }
}

export default connect(mapState, mapDispatch)(Crossroads)
