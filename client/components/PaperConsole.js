import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Casefile from './Casefile'
import Notes from './Notes'
import Lesson from './Lesson'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 0
  }
})

function PaperConsole(props) {
  const {classes} = props

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="The Comissioner"
            src="https://theartsdesk.com/sites/default/files/images/stories/TV/Lis_Ferla/THE_BLETCHLEY_CIRCLE_SERIES2_EP1_05.JPG"
            className={classes.bigAvatar}
          />
        </Grid>
        <Lesson />
        <Casefile />
        <Notes />
      </Paper>
    </div>
  )
}

PaperConsole.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperConsole)
