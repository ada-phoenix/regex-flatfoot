import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import SubjectIcon from '@material-ui/icons/Subject'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
})

class LessonIcon extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({open: true})
    let sound = new Audio('/button.mp3')
    sound.play()
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const {classes} = this.props

    return (
      <React.Fragment>
        <IconButton
          aria-label="Lesson"
          onClick={this.handleClickOpen}
          color="primary"
          className={classes.margin}
        >
          <SubjectIcon fontSize="small" />
        </IconButton>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="open-casefile"
        >
          <DialogTitle>Lesson</DialogTitle>
          <DialogContent>
            <DialogContentText color="primary">
              {this.props.lesson}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              X
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

LessonIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  game: state.game,
  lesson: state.game.lesson
})

export default connect(mapState)(withStyles(styles)(LessonIcon))
