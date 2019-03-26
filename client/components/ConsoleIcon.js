import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import NotesIcon from './NotesIcon'
import LessonIcon from './LessonIcon'
import CasefileIcon from './CasefileIcon'

const styles = {
  card: {
    width: 250,
    border: '4mm groove #424242',
    borderRadius: 5,
    background: 'linear-gradient(45deg, #1b1b1b, #6d6d6d)',
    backgroundColor: '#000000'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  bigAvatar: {
    margin: 0,
    width: '100%',
    height: '100%',
    borderRadius: 0,
    border: '10px solid #212121'
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
