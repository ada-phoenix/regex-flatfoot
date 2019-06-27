import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Login, Signup} from './index'
import {withStyles, Paper, Typography, Button} from '@material-ui/core'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      signup: false
    }
  }

  handleSignup = () => {
    const newState = !this.state.signup
    this.setState({signup: newState})
  }

  render() {
    console.log(this.state.signup)
    const {classes} = this.props
    return (
      <Paper className={classes.root}>
        <Typography variant="h2" className={classes.h2}>
          Welcome to DetectEx!
        </Typography>
        <Typography variant="body2" className={classes.type}>
          <p>
            DetectEx is a game designed to help you learn regular expressions.{' '}
          </p>
          <p>
            You start out as a Rookie code breaker, on the trail of the infamous
            GREP Crime Syndicate. As you move through the game, you will decrypt
            messages with regular expressions, collect clues, and ultimately
            bring these no-good scoundrels to justice!
          </p>
        </Typography>
        {this.state.signup ? (
          <React.Fragment>
            <Signup />
            <Typography variant="caption" className={classes.caption}>
              I have an account already!{' '}
              <Button
                color="secondary"
                variant="text"
                onClick={this.handleSignup}
              >
                Login
              </Button>
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Login />
            <Typography variant="caption" className={classes.caption}>
              Don't have an account yet?{' '}
              <Button
                color="secondary"
                variant="text"
                onClick={this.handleSignup}
              >
                Sign Up
              </Button>{' '}
              It's free!
            </Typography>
          </React.Fragment>
        )}
      </Paper>
    )
  }
}

//STYLES
const styles = theme => ({
  root: {
    margin: 50,
    padding: 50,
    maxWidth: 900,
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
  caption: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: theme.palette.text.primary,
    fontSize: 18
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
  }
})

//CONTAINER
export default connect()(withStyles(styles)(Home))
