import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core'
import {updateUser} from '../store/user'

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
    margin: 25,
    fontFamily: 'Cutive'
  },
  h2: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '70px'
    }
  }
})

class NoMore extends React.Component {
  constructor() {
    super()
    this.reset = this.reset.bind(this)
  }

  async reset() {
    let nextGame = {level: 1, levelstage: 1, clusterId: 1}
    await this.props.updateUser(this.props.userId, nextGame)
    this.props.history.push('/question')
  }

  render() {
    const {classes} = this.props

    return (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          Great job! You've captured all the criminals... for now!
        </Typography>
        <Typography className={classes.subtitle2} variant="subtitle2">
          But crime next rests and neither should you. Check back soon for more
          levels.
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={this.reset}
        >
          Replay!
        </Button>
      </Paper>
    )
  }
}

//Container
const mapState = state => {
  return {
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    updateUser: (userId, nextGame) => dispatch(updateUser(userId, nextGame))
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(NoMore))
