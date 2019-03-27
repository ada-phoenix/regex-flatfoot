import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  title: {
    color: '#7cb342',
    fontFamily: 'Cutive',
    fontSize: '2em'
  },
  text: {
    color: '#424242'
  }
})

class NotesIcon extends React.Component {
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
          aria-label="Notes"
          color="primary"
          onClick={this.handleClickOpen}
          className={classes.margin}
        >
          <AssignmentIcon fontSize="small" />
        </IconButton>
        <Dialog
          fullWidth={true}
          maxWidth="sm"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="open-casefile"
        >
          <DialogTitle disableTypography={true} className={classes.title}>
            Notes
          </DialogTitle>
          <DialogContent>
            {this.props.notes.map(note => {
              return (
                <DialogContentText key={note} className={classes.text}>
                  {note}
                </DialogContentText>
              )
            })}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className={classes.text}>
              X
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

NotesIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  notes: state.effects.notes
})

export default connect(mapState)(withStyles(styles)(NotesIcon))
