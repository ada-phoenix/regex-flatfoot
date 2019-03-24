import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import {withStyles, Typography, Paper} from '@material-ui/core'
import {green, red, purple, blue} from '@material-ui/core/colors'

const styles = theme => ({
  root: {
    margin: 50,
    padding: 50,
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
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
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '70px'
    }
  }
})

class Chase extends React.Component {
  render() {
    const {story, location, trail} = this.props.location.state
    const {classes} = this.props

    return trail === 'hot' ? (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          You arrive at {location}
        </Typography>
        <Typography className={classes.subtitle2} variant="subtitle2">
          {story}
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {
            this.props.history.push('/boss')
          }}
        >
          Get That Criminal!
        </Button>
      </Paper>
    ) : (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          You arrive at {location}
        </Typography>
        <Typography className={classes.subtitle2} variant="subtitle2">
          {story}
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {
            this.props.history.goBack()
          }}
        >
          Retrace Your Steps
        </Button>
      </Paper>
    )
  }
}

//Container
export default connect()(withStyles(styles)(Chase))
