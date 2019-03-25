import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

import NotesIcon from './NotesIcon'
import LessonIcon from './LessonIcon'
import CasefileIcon from './CasefileIcon'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 383,
    margin: theme.spacing.unit * 2
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: 0
  }
})

function ConsoleIcon(props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={24}
        >
          <Grid item xs={12}>
            <Avatar
              alt="The Comissioner"
              src="https://theartsdesk.com/sites/default/files/images/stories/TV/Lis_Ferla/THE_BLETCHLEY_CIRCLE_SERIES2_EP1_05.JPG"
              className={classes.bigAvatar}
            />
          </Grid>
          <Grid item xs={12}>
            <CardActions>
              <NotesIcon />
              <CasefileIcon />
              <LessonIcon />
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

ConsoleIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ConsoleIcon)
