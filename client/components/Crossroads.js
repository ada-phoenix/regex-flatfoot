import React from 'react'
import {connect} from 'react-redux'
import {getCluster} from '../store/cluster'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core'
import Loading from './Loading'

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
    console.log(this.props.clusterId)
    const {classes} = this.props
    const locations = this.props.cluster.locations
    return this.state.gotCluster ? (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          Let's Review the Clues
        </Typography>
        {this.props.casefile.map((clue, i) => {
          return (
            <Typography className={classes.h6} variant="h6" key={i}>
              {`${i + 1}) `}
              {clue}
            </Typography>
          )
        })}
        <Typography className={classes.type} variant="h5">
          Now, where to go...
        </Typography>
        {/* <div className="container"> */}
        <Grid container justify="center" alignItems="center">
          {locations.map((location, i) => {
            return (
              <Button
                key={i}
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={() => this.clickHandler(location[0], location[1])}
              >
                {location[0]}
              </Button>
            )
          })}
        </Grid>
        {/* </div> */}
      </Paper>
    ) : (
      <Loading />
    )
  }
}

const styles = theme => ({
  root: {
    margin: 50,
    padding: 50,
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light
  },
  button: {
    justifyContent: 'center',
    width: 250,
    margin: 10,
    [theme.breakpoints.down('xs')]: {
      width: 250
    },
    [theme.breakpoints.up('sm')]: {
      width: 150,
      height: 85
    }
  },
  type: {
    fontFamily: 'Cutive',
    margin: 20
  },
  h2: {
    textAlign: 'center',
    fontFamily: 'Cutive',
    padding: 10,
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '50px'
    }
  },
  h6: {
    fontFamily: 'Cutive',
    margin: 15,
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '22px'
    }
  }
})

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

export default connect(mapState, mapDispatch)(withStyles(styles)(Crossroads))
