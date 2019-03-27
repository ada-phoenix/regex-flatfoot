import React from 'react'
import {connect} from 'react-redux'
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

class Chase extends React.Component {
  render() {
    const {story, location, trail} = this.props.location.state
    const {classes} = this.props

    return trail === 'hot' ? (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          You arrive at {location}
        </Typography>
        <Typography className={classes.h6} variant="h6">
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
        <Typography className={classes.h6} variant="h6">
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
