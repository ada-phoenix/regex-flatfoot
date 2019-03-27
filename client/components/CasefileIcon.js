import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FolderIcon from '@material-ui/icons/Folder'
import IconButton from '@material-ui/core/IconButton'
import {setCasefileBadge} from '../store/effects'

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

class Casefile extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({open: true})
    this.props.setCasefileBadge(true)
    let sound = new Audio('/button.mp3')
    sound.play()
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const {classes, invisible} = this.props

    return (
      <React.Fragment>
        <IconButton
          aria-label="Casefile"
          color="primary"
          className={classes.margin}
          onClick={this.handleClickOpen}
        >
          <Badge
            color="secondary"
            variant="dot"
            invisible={invisible}
            className={classes.margin}
          >
            <FolderIcon fontSize="large" />
          </Badge>
        </IconButton>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="open-casefile"
        >
          <DialogTitle disableTypography={true} className={classes.title}>
            Casefile
          </DialogTitle>
          <DialogContent>
            {this.props.casefile.map((clue, i) => {
              return (
                <DialogContentText key={clue} className={classes.text}>
                  {`${i + 1}) `}
                  {clue}
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

Casefile.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  casefile: state.user.casefile,
  invisible: state.effects.caseFileBadgeInvisible
})

const mapDispatch = dispatch => {
  return {
    setCasefileBadge: boolean => dispatch(setCasefileBadge(boolean))
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Casefile))
