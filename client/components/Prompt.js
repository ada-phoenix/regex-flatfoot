import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

function Prompt(props) {
  const {classes} = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24} direction="column">
        <Paper className={classes.paper}>
          <Grid item xs className={classes.paper}>
            <Typography>{props.lesson}</Typography>
          </Grid>
          <Grid item xs className={classes.paper}>
            <Typography>{props.question}</Typography>
          </Grid>
          <Grid item xs className={classes.paper}>
            <Button variant="contained" color="secondary">
              Crack The Code!
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

Prompt.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Prompt)
