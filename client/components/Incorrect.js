import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'
import {incorrectUpdater} from '../util'
import {withStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded'

class Incorrect extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const previousGame = {
      level: this.props.level,
      levelstage: this.props.levelstage,
      clusterId: this.props.clusterId
    }
    let nextGame = incorrectUpdater(
      previousGame.level,
      previousGame.levelstage,
      previousGame.clusterId
    )

    this.props.updateUser(this.props.userId, {
      userInfo: {...nextGame},
      previousGame: previousGame
    })
  }

  render() {
    const {classes} = this.props
    let story = this.props.game.incorrect || ''
    let splitStory = story.split('\n')
    return (
      <Paper className={classes.root}>
        <Typography variant="h2" className={classes.h2}>
          {splitStory[0]}
        </Typography>
        <Typography variant="body2" className={classes.type}>
          {splitStory[1]}
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => history.push(`/question`)}
        >
          Continue
          <ArrowRightRounded className={classes.icon} />
        </Button>
      </Paper>
    )
  }
}

//STYLES

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
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center'
  },
  button: {
    padding: 15,
    margin: 50
  },
  type: {
    fontFamily: 'Cutive',
    padding: 10
  },
  icon: {
    fontSize: 44
  },
  h2: {
    fontFamily: 'Cutive',
    padding: 10,
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '70px'
    }
  },
  snackbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c6ff00',
    padding: 20,
    color: theme.palette.text.primary,
    fontSize: 12
  }
})

//CONTAINER
const mapState = state => {
  return {
    level: state.user.level || 1,
    levelstage: state.user.levelstage || 1,
    clusterId: state.user.clusterId || 1,
    game: state.game || {},
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    updateUser: (userId, nextGame) => dispatch(updateUser(userId, nextGame))
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Incorrect))
