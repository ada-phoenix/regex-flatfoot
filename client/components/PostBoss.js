import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'
import {clusterUpdater, deathUpdater} from '../util'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core'

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
          onClick={() => this.props.history.push('/question')}
        >
          Continue
        </Button>
      </Paper>
    ) : (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          {boss.incorrect}
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => this.props.history.push('/question')}
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
  updateUser: (userId, nextGame) => dispatch(updateUser(userId, nextGame))
})

export default connect(mapState, mapDispatch)(withStyles(styles)(PostBoss))
