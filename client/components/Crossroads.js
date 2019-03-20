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

  clickHandler(location) {
    const correctLocation = this.props.cluster.correctlocation
    if (location === correctLocation) {
      console.log('YOU PICKED THE RIGHT LOCATION')
    } else {
      console.log('TRY AGAIN')
    }
  }

  render() {
    const locations = this.props.cluster.locations
    return (
      //   <div>
      //     <div className="container" >
      //     clues go here
      //     </div>
      //     // <div className="container" >
      //     // {locations.map(location => {
      //     //   return(
      //     //   <button key={location[0]} type="button" onClick={() => this.clickHandler(location[0])} >
      //     //     {location[0]}
      //     //   </button>
      //     // )}}
      //     // </div>
      // </div>
      <h1>hi</h1>
    )
  }
}

const mapState = state => {
  return {
    clusterId: state.user.cluster || 1,
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
