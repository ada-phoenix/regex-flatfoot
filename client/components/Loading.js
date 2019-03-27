import React from 'react'
import {connect} from 'react-redux'
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
  type: {
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

class Loading extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.root}>
        <Typography className={classes.h2} variant="h2">
          Be Patient
        </Typography>
        <Typography className={classes.subtitle2} variant="subtitle2">
          We've got to dot our i's and cross our t's
        </Typography>
      </Paper>
    )
  }
}

//Container
export default connect()(withStyles(styles)(Loading))
