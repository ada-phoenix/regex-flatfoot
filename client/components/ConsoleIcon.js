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

import NotesIcon from './NotesIcon'
import LessonIcon from './LessonIcon'
import CasefileIcon from './CasefileIcon'

const styles = {
  card: {
    maxWidth: 600
  },
  media: {
    height: 250
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: 0
  }
}

function ConsoleIcon(props) {
  const {classes} = props
  return (
    <Card className={classes.card}>
      <Avatar
        alt="The Comissioner"
        src="https://theartsdesk.com/sites/default/files/images/stories/TV/Lis_Ferla/THE_BLETCHLEY_CIRCLE_SERIES2_EP1_05.JPG"
        className={classes.bigAvatar}
      />
      <CardActions>
        <NotesIcon />
        <CasefileIcon />
        <LessonIcon />
      </CardActions>
    </Card>
  )
}

ConsoleIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ConsoleIcon)
