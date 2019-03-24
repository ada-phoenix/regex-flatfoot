import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {withStyles, Button, Typography} from '@material-ui/core'
import {updateUser} from '../store/user'
import {correctUpdater} from '../util'
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.primary.dark
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.dark
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.primary.dark
    }
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
  }
})

class Correct extends React.Component {
  constructor() {
    super()
    this.whichScreen = this.whichScreen.bind(this)
    this.state = {
      displayPopUp: false
    }
    this.displayPopUp = this.displayPopUp.bind(this)
  }

  displayPopUp() {
    this.setState({displayPopUp: true}, () => {
      setTimeout(() => {
        this.setState({displayPopUp: false})
      }, 2000)
    })
  }

  whichScreen() {
    if (this.props.level === 4) {
      history.push(`/crossroads`)
    } else {
      history.push(`/question`)
    }
  }

  componentDidMount() {
    let nextGame = correctUpdater(
      this.props.level,
      this.props.levelstage,
      this.props.clusterId
    )
    this.props.updateUser(this.props.userId, {
      ...nextGame,
      clue: this.props.game.clue
    })
    this.displayPopUp()
  }

  render() {
    console.log(this.props)
    const {classes} = this.props
    let story = this.props.game.correct || ''
    return (
      <div className={classes.root}>
        {this.state.displayPopUp && (
          <div className="popup">A clue has been added to your casefile!</div>
        )}
        {/* <p>{story}</p> */}
        <div className={classes.container}>
          <Typography variant="h3" className={classes.type}>
            Good work, Rookie!
          </Typography>
          <Typography variant="body2" className={classes.type}>
            The boys picked up Dmytrenko and he's singing like a canary! Go
            check out the parking lot behind the hotdog stand on Ninth and
            Grand. He said it's one of their drop off points.
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            type="button"
            onClick={this.whichScreen}
          >
            Continue
            <ArrowRightRounded className={classes.icon} />
          </Button>
        </div>
      </div>
    )
  }
}

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

export default connect(mapState, mapDispatch)(withStyles(styles)(Correct))
