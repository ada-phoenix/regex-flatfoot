import React from 'react'
import history from '../history'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core'
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded'
import FolderSpecial from '@material-ui/icons/FolderSpecial'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import {updateUser} from '../store/user'
import {setCasefileBadge} from '../store/effects'
import {correctUpdater, updateCasefile} from '../util'

class Correct extends React.Component {
  constructor() {
    super()
    this.whichScreen = this.whichScreen.bind(this)
    this.state = {
      displayPopUp: false
    }
  }

  handleClose = event => {
    this.setState({displayPopUp: false})
    this.props.setCasefileBadge(false)
  }

  whichScreen() {
    if (this.props.level === 4) {
      history.push(`/crossroads`)
    } else {
      history.push(`/question`)
    }
  }

  componentDidMount() {
    const previousGame = {
      level: this.props.level,
      levelstage: this.props.levelstage,
      clusterId: this.props.clusterId
    }
    let nextGame = correctUpdater(
      previousGame.level,
      previousGame.levelstage,
      previousGame.clusterId
    )

    const updatedCasefile = updateCasefile(
      this.props.user.casefile,
      this.props.game.clue
    )

    this.props.updateUser(this.props.userId, {
      userInfo: {...nextGame, casefile: updatedCasefile},
      previousGame: previousGame
    })
    this.setState({displayPopUp: true})
    this.sound = new Audio(this.props.game.sound)
    this.sound.play()
  }

  componentWillUnmount() {
    this.sound.pause()
    this.sound.currentTime = 0
  }

  render() {
    const {classes} = this.props
    let story = this.props.game.correct || ''
    let splitStory = story.split('\n')
    return (
      <Paper className={classes.root}>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          message={
            <React.Fragment>
              <FolderSpecial />
              <Typography variant="body2" className={classes.type}>
                A clue has been added to your casefile! {this.props.game.clue}
              </Typography>
            </React.Fragment>
          }
          open={this.state.displayPopUp}
          autoHideDuration={8000}
          onClose={this.handleClose}
          ContentProps={{className: classes.snackbar}}
          action={[
            <Button
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            />
          ]}
        />
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
          onClick={this.whichScreen}
        >
          Continue
          <ArrowRightRounded className={classes.icon} />
        </Button>
      </Paper>
    )
  }
}

//STYLING

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
    userId: state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    updateUser: (userId, nextGame) => dispatch(updateUser(userId, nextGame)),
    setCasefileBadge: boolean => dispatch(setCasefileBadge(boolean))
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Correct))
