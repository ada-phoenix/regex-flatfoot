import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import NotesIcon from './NotesIcon'
import LessonIcon from './LessonIcon'
import CasefileIcon from './CasefileIcon'
import HintIcon from './HintIcon'

const styles = {
  card: {
    alignSelf: 'center',
    justifySelf: 'center',
    flexBasis: 250,
    maxWidth: 250,
    minWidth: 250,
    minHeight: 350,
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
        {props.hintVisibility ? <HintIcon /> : <div />}
      </CardActions>
    </Card>
  )
}

ConsoleIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  hintVisibility: state.effects.hintVisibility
})

export default connect(mapState)(withStyles(styles)(ConsoleIcon))

/*

*/
