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
import HelpOutline from '@material-ui/icons/HelpOutline'

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

class HintIcon extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({open: true})
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
          <HelpOutline fontSize="large" color="secondary" />
        </IconButton>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="open-casefile"
        >
          <DialogTitle disableTypography={true} className={classes.title}>
            Hint
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.text}>
              {this.props.hint}
            </DialogContentText>
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

HintIcon.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  game: state.game,
  hint: state.game.hint
})

export default connect(mapState)(withStyles(styles)(HintIcon))
