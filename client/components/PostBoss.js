import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'
import {clusterUpdater, deathUpdater} from '../util'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core'
import {getAllClusters} from '../store/cluster'
import axios from 'axios'

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
    margin: 50,
    justifyContent: 'center'
  },
  subtitle2: {
    margin: 25
  },
  h2: {
    textAlign: 'center',
    margin: 30,
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px'
    }
  }
})

class PostBoss extends React.Component {
  constructor() {
    super()
    this.state = {
      updatedUser: false
    }
    this.direction = this.direction.bind(this)
  }

  async componentDidMount() {
    const nextGame = this.props.location.state.won
      ? clusterUpdater(
          this.props.level,
          this.props.levelstage,
          this.props.clusterId
        )
      : deathUpdater(1, 1, this.props.clusterId)

    await this.props.updateUser(this.props.userId, {
      userInfo: {...nextGame},
      previousGame: null
    })
    this.setState({updatedUser: true})
    const {data} = await axios.get(`/api/clusters/`)
    this.clusters = data
    if (this.props.location.state.won) {
      let sound = new Audio('/jail.mp3')
      sound.play()
    } else {
      let sound = new Audio('/explosion.mp3')
      sound.play()
    }
  }

  componentWillUnmount() {
    this.setState({updatedUser: false})
  }

  direction() {
    if (this.clusters.length <= this.props.clusterId) {
      this.props.history.push('/noMore')
    } else {
      this.props.history.push('/question')
    }
  }

  render() {
    const {classes} = this.props
    const boss = this.props.boss
    return this.state.updatedUser && this.props.location.state.won ? (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          {boss.correct}
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={this.direction}
        >
          Continue
        </Button>
      </Paper>
    ) : (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          {boss.incorrect}
        </Typography>
        <img
          src="https://media.giphy.com/media/aTf4PONtSYB1e/giphy.gif"
          alt="cartoon ghost"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={this.direction}
        >
          Continue
        </Button>
      </Paper>
    )
  }
}

//CONTAINER
const mapState = state => ({
  level: state.user.level || 1,
  levelstage: state.user.levelstage || 1,
  clusterId: state.user.clusterId || 1,
  userId: state.user.id,
  boss: state.cluster.boss
})

const mapDispatch = dispatch => ({
  updateUser: (userId, nextGame) => dispatch(updateUser(userId, nextGame)),
  getAllClusters: () => dispatch(getAllClusters())
})

export default connect(mapState, mapDispatch)(withStyles(styles)(PostBoss))
